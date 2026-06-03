import type { Service } from '@/interfaces/content';

/**
 * The three core services. Adding a service here automatically creates its
 * detail page (/services/[slug]), nav/cards, sitemap entry, and Service JSON-LD.
 */
export const services: Service[] = [
  {
    slug: 'home-staging',
    shortName: 'Staging',
    name: 'Home Staging',
    summary:
      'Professionally staged homes sell faster and for up to 15% more. We furnish and style your listing to help buyers fall in love.',
    intro:
      'First impressions sell homes. Our staging team transforms empty or lived-in properties into warm, aspirational spaces that photograph beautifully and move buyers to make an offer.',
    sections: [
      {
        heading: 'Why staging works',
        body: [
          'Buyers struggle to picture themselves in an empty room — and they remember the flaws of a cluttered one. Staging bridges that gap, presenting each space at its best so the listing stands out online and in person.',
          'Studies consistently show staged homes spend less time on the market and command higher offers. For agents and sellers alike, staging is one of the highest-return investments you can make before listing.',
        ],
      },
      {
        heading: 'How we work',
        body: [
          'We start with a walkthrough and a clear plan tailored to your property and price point. From there we bring in furniture, art, and accessories from our own inventory, styling every room to feel inviting and intentional.',
          'Whether you need a vacant home fully furnished or a few rooms refreshed, we scale the package to your listing and timeline.',
        ],
      },
    ],
    highlights: [
      'Vacant and occupied home staging',
      'Full inventory of furniture and accessories',
      'Styling optimized for listing photography',
      'Fast turnaround to match your listing date',
    ],
    faqs: [
      {
        question: 'How much does home staging cost in Colorado?',
        answer:
          'Staging is priced per project based on the size of the home, number of rooms, and length of the staging period. We provide a free, no-obligation quote after a quick walkthrough or a few photos of the property.',
      },
      {
        question: 'Do staged homes really sell for more?',
        answer:
          'Industry data shows professionally staged homes can sell for up to 15% more and spend significantly less time on the market than comparable unstaged listings.',
      },
      {
        question: 'Do you provide the furniture?',
        answer:
          'Yes. We maintain our own inventory of furniture, art, and accessories and bring everything needed to style the home — you do not need to source or rent anything separately.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A staged living room with neutral furnishings and soft natural light',
  },
  {
    slug: 'interior-design',
    shortName: 'Design',
    name: 'Interior Design',
    summary:
      'Elegant, timeless interiors tailored to how you live — from a single-room refresh to full redesign and implementation.',
    intro:
      'Your home should feel like you. We design rooms that are beautiful and livable, balancing fresh, current style with a sense of warmth that lasts well beyond the trends.',
    sections: [
      {
        heading: 'Consultation or full service',
        body: [
          'Prefer to do the work yourself? Our design consultation gives you a clear, actionable plan — layout, color, furniture, and finishes — that you can execute at your own pace.',
          'Want it handled end to end? Our full-service design covers sourcing, procurement, and styling, so you simply walk into a finished space.',
        ],
      },
      {
        heading: 'Our aesthetic',
        body: [
          'Fresh, clean, timeless, and sophisticated — the same principles that guide our brand guide every room we design. We layer texture, light, and considered detail to create spaces that feel collected, not decorated.',
        ],
      },
    ],
    highlights: [
      'Single-room refresh to whole-home design',
      'Consultation-only or full implementation',
      'Furniture, finishes, and accessory sourcing',
      'Layouts that balance beauty and everyday function',
    ],
    faqs: [
      {
        question: 'Do you offer design consultations only?',
        answer:
          'Yes. Many clients book a consultation to receive a complete plan — layout, paint, furniture, and finishes — and then implement it themselves. You can always upgrade to full service later.',
      },
      {
        question: 'Can you work with furniture I already own?',
        answer:
          'Absolutely. We frequently build a refreshed design around pieces you love, supplementing with new items where needed to complete the look.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A thoughtfully designed interior with layered textures and warm tones',
  },
  {
    slug: 'color-consult',
    shortName: 'Color Consult',
    name: 'Color Consultation',
    summary:
      'Choosing paint colors is harder than it looks. We help you select palettes that flatter your light, your finishes, and your home.',
    intro:
      'The right paint color can transform a room — and the wrong one is an expensive mistake. Our color consultation takes the guesswork out, with expert palette recommendations tailored to your space.',
    sections: [
      {
        heading: 'Get the color right the first time',
        body: [
          'Lighting, undertones, fixed finishes, and flow between rooms all change how a color reads. We evaluate your space in person and recommend a cohesive palette that works in your actual light — not just on a swatch.',
          'You leave with specific paint selections for walls, trim, and accents, ready to hand to your painter.',
        ],
      },
    ],
    highlights: [
      'Whole-home or single-room palettes',
      'Wall, trim, and accent color selections',
      'Recommendations matched to your light and finishes',
      'Paint-ready specifications for your painter',
    ],
    faqs: [
      {
        question: 'How long does a color consultation take?',
        answer:
          'Most consultations take one to two hours depending on the number of rooms. You receive specific paint recommendations you can act on right away.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Paint swatches and color samples arranged on a table',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
