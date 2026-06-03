import type { Project } from '@/interfaces/content';

/**
 * Portfolio / gallery projects. Seed entries with placeholder imagery — replace
 * `cover`/`images` with real photography. Adding a project here auto-generates
 * its detail page, gallery card, sitemap entry, and ImageGallery JSON-LD.
 */
export const projects: Project[] = [
  {
    slug: 'modern-farmhouse-staging-denver',
    title: 'Modern Farmhouse Staging',
    location: 'Denver, CO',
    serviceSlug: 'home-staging',
    summary:
      'A vacant four-bedroom listing staged top to bottom to highlight its open layout and natural light. Under contract within a week.',
    cover: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    coverAlt: 'Staged modern farmhouse living room',
    images: [
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', alt: 'Staged living room with neutral palette' },
      { src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80', alt: 'Staged dining area' },
      { src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80', alt: 'Staged primary bedroom' },
    ],
    date: '2026-02-10',
  },
  {
    slug: 'warm-minimal-redesign-boulder',
    title: 'Warm Minimal Redesign',
    location: 'Boulder, CO',
    serviceSlug: 'interior-design',
    summary:
      'A full living and dining redesign blending clean lines with warm, tactile materials for a young family.',
    cover: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80',
    coverAlt: 'Warm minimal living room redesign',
    images: [
      { src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80', alt: 'Redesigned living room' },
      { src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80', alt: 'Redesigned dining nook' },
    ],
    date: '2026-01-18',
  },
  {
    slug: 'timeless-color-refresh-littleton',
    title: 'Timeless Color Refresh',
    location: 'Littleton, CO',
    serviceSlug: 'color-consult',
    summary:
      'A whole-home palette consultation that brought cohesion and light to a 1990s build.',
    cover: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
    coverAlt: 'Freshly painted interior with a warm neutral palette',
    images: [
      { src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80', alt: 'Repainted entryway' },
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', alt: 'Repainted living room' },
    ],
    date: '2025-12-05',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
