/** Shared content types — drive pages, navigation, sitemap, and JSON-LD. */

export interface FAQ {
  question: string;
  answer: string;
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
  /** Body sections (heading + paragraphs). */
  sections: { heading: string; body: string[] }[];
  /** Bullet list of what's included / benefits. */
  highlights: string[];
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
