/**
 * Single source of truth for business identity (NAP), brand strings, and socials.
 * Used by metadata, JSON-LD, footer, header, and contact page.
 */

export const siteConfig = {
  name: 'Blooming Staging and Design',
  shortName: 'Blooming',
  tagline: 'Innovative ideas, stylish designs',
  description:
    'Blooming Staging and Design is a Colorado home staging and interior design studio. We help real estate agents sell homes faster and for more, and help homeowners create elegant, timeless spaces.',

  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloomingstaginganddesign.com',

  // Contact (NAP)
  email: 'bloomingdesignllc@gmail.com',
  phones: ['(720) 641-4961', '(303) 257-3978'],

  // Service area
  areaServed: ['Colorado', 'Denver', 'Boulder', 'Aurora', 'Centennial', 'Littleton'],
  region: 'CO',
  regionName: 'Colorado',

  // Founders
  founders: ['Liliya Zelem', 'Amanda Boucher'],

  // Social
  social: {
    instagram: 'https://www.instagram.com/blooming_staging_design/',
    facebook: 'https://www.facebook.com/bloomingstaginganddesign/',
  },

  // Brand credit
  brandDesignBy: 'Pier 9 Design',
} as const;

/** Absolute URL helper for canonical / OG / JSON-LD. */
export function absoluteUrl(path = ''): string {
  const base = siteConfig.url.replace(/\/$/, '');
  if (!path) return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Sanitized list of social profile URLs (for JSON-LD sameAs). */
export const sameAs = Object.values(siteConfig.social);
