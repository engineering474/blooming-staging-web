import type { BrandValue, Milestone } from '@/interfaces/content';

/**
 * About-page content. Single source of truth for the brand milestones and
 * values — the home About teaser and the About page both read from here, so the
 * two stay in sync. Plain data, ready to move into a headless CMS.
 */
export const milestones: Milestone[] = [
  { value: '2020', label: 'Founded and built from scratch' },
  { value: '500+', label: 'Homes staged across the Front Range' },
  { value: '$250M+', label: 'In local real estate staged' },
  { value: '100%', label: 'Owned warehouse inventory' },
];

export const brandValues: BrandValue[] = [
  {
    title: 'Elegant',
    body: 'We believe in refined, considered spaces — beautiful in the details and never overdone.',
  },
  {
    title: 'Timeless',
    body: 'We design for the long term, balancing what is current with what will still feel right in years to come.',
  },
  {
    title: 'Accessible',
    body: 'Great design should not be reserved for the few. We meet you where you are, with options for every budget.',
  },
  {
    title: 'Professional',
    body: 'From first consultation to final reveal, we bring a calm, organized, dependable process.',
  },
];
