import type { Testimonial } from '@/interfaces/content';

/** Client testimonials. Used on the homepage and as aggregateRating in JSON-LD. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Blooming staged one of my listings and it sold within days, above asking. Their eye for detail and quick turnaround made all the difference. I recommend them to every seller.',
    author: 'Sarah M.',
    role: 'Real Estate Agent',
    rating: 5,
  },
  {
    quote:
      'They redesigned our living and dining rooms and it feels like a completely different home — elegant but still comfortable for our family. Professional from start to finish.',
    author: 'The Andersons',
    role: 'Homeowners',
    rating: 5,
  },
  {
    quote:
      'I was overwhelmed picking paint colors. After one color consultation I had a palette I loved and the confidence to move forward. Worth every penny.',
    author: 'Jessica R.',
    role: 'Homeowner',
    rating: 5,
  },
];
