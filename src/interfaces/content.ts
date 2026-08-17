/** Shared content types — drive pages, navigation, sitemap, and JSON-LD. */

export interface FAQ {
  question: string;
  answer: string;
}

/**
 * A single headline statistic, e.g. "95%" + a supporting label.
 * Value/prefix/suffix are kept separate (not a single "95%" string) so each part
 * is independently editable and maps cleanly to a future CMS schema. The numeric
 * `value` is what the homepage stats counter animates to.
 */
export interface Stat {
  /** Stable key — used for React keys and CMS field mapping. */
  id: string;
  /** Numeric target the counter animates to, e.g. 95. */
  value: number;
  /** Optional leading symbol, e.g. "$". */
  prefix?: string;
  /** Optional trailing symbol, e.g. "%" or "M". */
  suffix?: string;
  /** Supporting description shown beneath the number. */
  label: string;
  /** Optional source/attribution, e.g. "NAR" or "Realtor Magazine". */
  source?: string;
}

/**
 * A single pricing tier shown on a service's detail page. Prices are stored as
 * display strings (not numbers) so ranges like "$450–$650" and units like
 * "per room" map cleanly to a future CMS field without parsing logic.
 */
export interface PricingTier {
  /** Stable key — used for React keys and CMS field mapping. */
  id: string;
  /** Tier name, e.g. "Per-room staging". */
  name: string;
  /** Display price, e.g. "$450–$650" or "$250". */
  price: string;
  /** Optional cadence/unit shown next to the price, e.g. "per room", "per hour". */
  unit?: string;
  /** Short description of what the tier includes. */
  description: string;
  /** Highlight this tier as the recommended/"most popular" option. */
  featured?: boolean;
}

/**
 * A section of a service detail page. `tagline` renders as an emphasized lead
 * line under the heading; `items` render as a labeled list (label + text). Both
 * are optional so a simple section can use `body` alone.
 */
export interface ServiceSection {
  heading: string;
  /** Optional emphasized lead line shown under the heading, e.g. a tagline. */
  tagline?: string;
  /** Body paragraphs. */
  body: string[];
  /** Optional labeled items, e.g. { label: 'The Bones', text: 'cabinets, …' }. */
  items?: { label: string; text: string }[];
  /** Optional closing line rendered after the body/items, e.g. a sign-off. */
  outro?: string;
}

export interface Service {
  /** URL slug, e.g. "home-staging". */
  slug: string;
  /** Short label used in nav/cards, e.g. "Staging". */
  shortName: string;
  /** Full page title, e.g. "Home Staging". */
  name: string;
  /** One-line summary for cards and meta description. */
  summary: string;
  /** Longer hero/intro paragraph. */
  intro: string;
  /** Body sections (heading + optional tagline + paragraphs + optional items). */
  sections: ServiceSection[];
  /** Bullet list of what's included / benefits. */
  highlights: string[];
  /** Optional pricing tiers shown in a dedicated section on the detail page. */
  pricing?: PricingTier[];
  /** Service-specific FAQs (also emitted as FAQPage JSON-LD). */
  faqs: FAQ[];
  /** Hero image path under /public. */
  image: string;
  imageAlt: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  /** Which service this project showcases (matches Service.slug). */
  serviceSlug: string;
  summary: string;
  /** Cover image path under /public. */
  cover: string;
  coverAlt: string;
  /** Gallery images. */
  images: { src: string; alt: string }[];
  /** Optional before/after pair. */
  beforeAfter?: { before: string; after: string; alt: string };
  /** ISO date string. */
  date: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

/**
 * A headline brand milestone, e.g. "500+" homes. The value is a string (not a
 * number) so it can carry units like "$250M+" or "100%".
 */
export interface Milestone {
  value: string;
  label: string;
}

/** A brand value — a one-word title and a supporting line. */
export interface BrandValue {
  title: string;
  body: string;
}

/**
 * A single image inside a gallery album. `label` is the title shown in the
 * carousel caption; `desc` is an optional longer line beneath it. Kept as plain
 * data so albums map cleanly to a future CMS.
 */
export interface GalleryImage {
  src: string;
  /** Title shown in the carousel caption. */
  label: string;
  /** Optional supporting description shown under the label. */
  desc?: string;
  /** Accessible alt text; falls back to `label` when omitted. */
  alt?: string;
  /** Intrinsic pixel size — what a CMS asset record reports for the file. */
  width?: number;
  height?: number;
}

/** A labeled album (e.g. "Living Room") — a tile that opens a carousel. */
export interface GalleryAlbum {
  /** Stable key / slug, e.g. "living-room". */
  id: string;
  /** Label shown above the tile, e.g. "Living Room". */
  label: string;
  images: GalleryImage[];
}

/** A gallery category/section, e.g. "Interior Design", grouping albums. */
export interface GalleryCategory {
  /** Stable key, e.g. "interior-design". */
  id: string;
  /** Section title, e.g. "Interior Design". */
  title: string;
  albums: GalleryAlbum[];
}
