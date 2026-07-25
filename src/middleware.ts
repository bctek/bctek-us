import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  
  // 1. Check if you are trying to authenticate (bypass the gate)
  if (url.searchParams.get('admin') === 'let-me-in') {
    context.cookies.set('admin_access', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // Stay logged in for 30 days
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    });
    
    // Redirect to the same URL without the query parameter to clean it up
    url.searchParams.delete('admin');
    return context.redirect(url.pathname || '/');
  }

  // 2. Allow specific public paths to bypass the gate
  if (
    url.pathname === '/coming-soon' ||
    url.pathname === '/robots.txt' ||
    url.pathname.startsWith('/_astro/') || // Astro's internal static assets
    url.pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js)$/i) // Other static assets
  ) {
    return next();
  }

  // 3. Check for the admin cookie
  const hasAccess = context.cookies.get('admin_access')?.value === 'true';

  if (!hasAccess) {
    // Redirect unauthorized users to the coming soon page
    return context.redirect('/coming-soon');
  }

  // 4. Authorized user (you), let them see the real site!
  return next();
});
