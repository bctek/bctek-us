import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01', // Use today's date for latest API features
  useCdn: false, // We set this to false because Astro is running in SSR mode, so we want fresh data on every request
  token: import.meta.env.SANITY_API_TOKEN,
});
