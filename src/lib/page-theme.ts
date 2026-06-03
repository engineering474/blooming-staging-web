/**
 * Single source of truth for per-route header treatment.
 * Most pages use the light/cream brand background; detail pages with full-bleed
 * hero imagery start with a transparent (overlay) header.
 */

export type HeaderTheme = 'light' | 'overlay';

export interface PageTheme {
  /** Header background treatment at the top of the page. */
  header: HeaderTheme;
}

const DEFAULT_THEME: PageTheme = { header: 'light' };

/** Routes whose hero is a full-bleed image → transparent header that floats over it. */
const OVERLAY_PREFIXES = ['/gallery/'];

export function getPageTheme(pathname: string): PageTheme {
  if (pathname === '/') return { header: 'overlay' };
  if (OVERLAY_PREFIXES.some((p) => pathname.startsWith(p) && pathname !== p.slice(0, -1))) {
    return { header: 'overlay' };
  }
  return DEFAULT_THEME;
}
