/**
 * Curated placeholder imagery (Unsplash). Swap these for real Blooming
 * photography by replacing the URLs here or in the content/* files.
 *
 * Remote host is allow-listed in next.config.ts (images.unsplash.com).
 */

/** Build an optimized Unsplash URL from a photo ID. */
export function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

/** Tiny neutral blur placeholder (warm cream) used for remote images. */
export const NEUTRAL_BLUR =
  'data:image/svg+xml;base64,' +
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6"><rect width="8" height="6" fill="#efeae2"/></svg>',
  ).toString('base64');

export const marketingImages = {
  hero: unsplash('photo-1600585154340-be6161a56a0c', 2000),
  aboutTeaser: '/images/about/3.jpg',
  ctaBackground: unsplash('photo-1618220179428-22790b461013', 2000),
} as const;
