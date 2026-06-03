/** Centralized navigation config — single source for header + footer + sitemap. */

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

/** The primary conversion CTA used across the site. */
export const primaryCta: NavItem = { label: 'Get a Free Quote', href: '/contact' };
