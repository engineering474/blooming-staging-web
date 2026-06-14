import type { Testimonial } from '@/interfaces/content';

/** Client testimonials. Used on the homepage and as aggregateRating in JSON-LD. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Amanda from Blooming Staging made my listing look like a million dollars! Her design choices were architecturally appropriate and made my listing pop. As a matter of fact, I liked it so much I hired her to design my personal kitchen.',
    author: 'Gene Finley',
    role: 'American Home Agents',
    rating: 5,
  },
  {
    quote:
      "Wow, what a great design team! We used Blooming Staging and Design to stage a home we were selling and we could not have been more impressed. They were very responsive and professional throughout the process, took great detail to inspect the house first, and were quick and detailed in their approach. Their design touches were simply amazing. Our listing went under contract in a couple days and we received numerous comments from buyers and agents on how nice the house looked and how well it was staged. I'm convinced that their design work allowed us to sell quicker and at a higher price. Five stars all around!",
    author: 'Kim Wyatt',
    role: 'Your Castle Real Estate',
    rating: 5,
  },
  {
    quote:
      'I have nothing but great things to say about Blooming Staging & Design! We recently used their services to stage our townhome before we put it on the market and they exceeded our expectations. Not only are both Liliya and Amanda great to work with, but their process was easy and flawless, and their prices were competitive, yet reasonable. Above all, they made our home look clean and cute! We appreciate their hard work and help in staging our home. Thanks for helping us get it sold ladies!',
    author: 'Kaitlin Camisa',
    role: 'Homeowner',
    rating: 5,
  },
];
