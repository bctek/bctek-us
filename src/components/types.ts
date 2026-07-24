export interface NavigationProps {
  currentPath?: string;
  links?: Array<{ label: string; href: string }>;
}

export interface TerminalFrameProps {
  title?: string;
}

export interface ServiceCardProps {
  icon?: string;
  title: string;
  description: string;
  category?: string;
  badge?: string;
  features?: string[];
  href?: string;
}

export interface GlassCardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  variant?: 'default' | 'accent' | 'highlight';
}

export interface TierCardProps {
  name: string;
  tagline: string;
  price?: string;
  period?: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
}

export interface TechStackItem {
  name: string;
  category: 'identity' | 'mdm' | 'cloud' | 'saas' | 'security';
  iconName?: string;
  description?: string;
}

export interface TechStackGridProps {
  items?: TechStackItem[];
}
