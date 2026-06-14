import type { Stat } from '@/interfaces/content';

/**
 * Home-staging proof-point statistics shown on the homepage stats band.
 *
 * Edit the numbers, labels, and sources here — this file is the single source of
 * truth for the stats and is structured as plain data so it can be moved into a
 * headless CMS (e.g. Sanity) later without touching any component code.
 */
export const stagingStats: Stat[] = [
  {
    id: 'buyers-online',
    value: 95,
    suffix: '%',
    label: 'of buyers search for homes online — staged photos get up to 40% more views',
  },
  {
    id: 'days-on-market',
    value: 73,
    suffix: '%',
    label: 'less time on the market for staged homes versus unstaged listings',
  },
  {
    id: 'sale-price',
    value: 25,
    suffix: '%',
    label: 'higher sale price than comparable homes sold without staging',
    source: 'Realtor Magazine',
  },
  {
    id: 'agents-picture',
    value: 83,
    suffix: '%',
    label: "of buyers' agents say staging helps buyers picture the home as their own",
    source: 'NAR',
  },
  {
    id: 'agents-view',
    value: 47,
    suffix: '%',
    label: "of agents say staging had an effect on most buyers' view of the home",
    source: 'NAR',
  },
];
