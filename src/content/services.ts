import type { Service } from '@/interfaces/content';

/**
 * The three core services. Adding a service here automatically creates its
 * detail page (/services/[slug]), nav/cards, sitemap entry, and Service JSON-LD.
 *
 * Content is plain data so it can be moved into a headless CMS (e.g. Sanity)
 * later without touching any component code.
 */
export const services: Service[] = [
  {
    slug: 'home-staging',
    shortName: 'Staging',
    name: 'Home Staging',
    summary:
      'Maximize your equity and minimize days on market. We highlight a property’s best features to inspire higher offers and faster sales.',
    intro:
      'Maximize Your Equity, Minimize Days on Market. In today’s competitive real estate market, buyers aren’t just looking for a property — they are looking for a lifestyle. Home staging transforms spaces by highlighting a property’s best features, maximizing perceived square footage, and creating an emotional connection that inspires higher offers and faster sales. We offer tailored staging solutions to fit every property type and budget:',
    sections: [
      {
        heading: 'Vacant Home Staging',
        tagline: 'Transforming cold, empty spaces into warm, inviting homes.',
        body: [
          'Empty rooms actually look smaller to buyers, and layout challenges can leave them confused. Our full-service vacant staging solves this by bringing in high-end, curated furniture, rugs, lighting, artwork, and accessories. We strategically design key rooms (like the living room, kitchen, primary suite, and dining areas) to give the home scale, purpose, and unforgettable online photos.',
        ],
      },
      {
        heading: 'Occupied Home Staging',
        tagline: 'Working with what you have to get the best results.',
        body: [
          'Selling a home while living in it is a challenge. We partner with homeowners to optimize the property using a blend of their existing furniture and our specialized staging inventory. We will help you declutter, depersonalize, and rearrange your layout to maximize flow, brighten up the space, and appeal to the widest pool of prospective buyers.',
        ],
      },
      {
        heading: 'Professional Staging Consultations',
        tagline: 'A roadmap for the DIY homeowner.',
        body: [
          'If you prefer to do the physical work yourself but need an expert game plan, our staging consultation is the perfect option. We will walk through the entire property together (interior and exterior) and provide a detailed, room-by-room action plan. You’ll get specific recommendations on paint touch-ups, decluttering, furniture placement, and curb appeal enhancements to tackle before listing.',
        ],
      },
    ],
    highlights: [
      'Vacant staging with high-end, curated furniture and accessories',
      'Occupied staging that blends your pieces with our inventory',
      'DIY consultations with a detailed, room-by-room action plan',
      'Styling designed to maximize space and listing photography',
    ],
    pricing: [
      {
        id: 'per-room',
        name: 'Per-room staging',
        price: '$450–$650',
        unit: 'per room',
        description:
          'Full-house furnishing and logistics — curated furniture, rugs, lighting, artwork, and accessories for each room we stage.',
      },
      {
        id: 'starter-package',
        name: 'Starter package',
        price: '$1,800–$2,400',
        unit: 'one-time',
        description:
          'Design, install, and the first month of staging for your key rooms — ideal for getting a listing photo-ready fast.',
        featured: true,
      },
      {
        id: 'consultation',
        name: 'Staging consultation',
        price: '$300–$350',
        unit: 'per session',
        description:
          'A one-hour walkthrough of the property with a detailed, room-by-room report you can act on yourself.',
      },
      {
        id: 'hourly',
        name: 'Hourly rate',
        price: '$250',
        unit: 'per hour',
        description:
          'Hands-on styling or shopping support, billed by the hour for smaller, focused projects.',
      },
    ],
    faqs: [
      {
        question: 'How much does home staging cost?',
        answer:
          'Vacant and occupied staging is typically priced per room, from $450 to $650 per room for full furnishing and logistics. A starter package covering design, install, and the first month for key rooms runs $1,800 to $2,400. Prefer a DIY plan? A staging consultation is $300 to $350, and hands-on styling or shopping is available at $250 per hour. Every project starts with a free, no-obligation quote.',
      },
      {
        question: 'Do staged homes really sell for more?',
        answer:
          'Industry data shows professionally staged homes sell for up to 25% more and spend significantly less time on the market than comparable unstaged listings. 83% of buyers’ agents say staging makes it easier for clients to picture a property as their future home.',
      },
      {
        question: 'Do you provide the furniture?',
        answer:
          'Yes. For vacant staging we maintain our own inventory of furniture, art, and accessories and bring everything needed to style the home. For occupied homes, we blend your existing pieces with our staging inventory so you do not need to source or rent anything separately.',
      },
    ],
    image: '/images/gallery/vacant_stagging/denver.avif',
    imageAlt: 'A professionally staged living room with neutral furnishings',
  },
  {
    slug: 'interior-design',
    shortName: 'Design',
    name: 'Interior Design',
    summary:
      'Interior design, made simple. We uncover your style and handle the heavy lifting — from cabinets and flooring to furniture, textiles, and art.',
    intro:
      'Let’s be honest: walking into a showroom or staring at a wall of paint swatches can feel incredibly overwhelming. There are thousands of choices — but you only need the right ones. That’s where we come in.',
    sections: [
      {
        heading: 'Interior Design, Made Simple',
        body: [
          'We partner with you to uncover your unique style and bring it to life, handling all the heavy lifting and decision-making stress. No project is too big or too small. We’re here to help you select and style:',
        ],
        items: [
          { label: 'The Bones', text: 'Cabinets, flooring, countertops, and hardware.' },
          {
            label: 'The Atmosphere',
            text: 'Perfect paint colors, lighting fixtures, and finishes.',
          },
          {
            label: 'The Polish',
            text: 'Furniture layout, cozy textiles, rugs, and curated artwork.',
          },
        ],
        outro:
          'Ready to create your dream space? Let’s build something beautiful together.',
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
    image: '/images/gallery/interior_design/living_room/1.avif',
    imageAlt: 'A thoughtfully designed living room with layered textures and warm tones',
  },
  {
    slug: 'color-consult',
    shortName: 'Color Consult',
    name: 'Color Consultation',
    summary:
      'Eliminate the guesswork. We analyze your light, finishes, and furnishings to build a cohesive palette that flows from room to room.',
    intro:
      'Staring at a wall of endless paint swatches can feel incredibly overwhelming. Light shifts throughout the day, and a color that looks perfect in the store can look completely different on your walls.',
    sections: [
      {
        heading: 'Eliminate the Guesswork. Get the Perfect Palette.',
        body: [
          'Our professional color consultation takes the stress out of the process. We analyze your home’s unique architectural features, natural lighting, flooring, and existing furnishings to create a cohesive, beautiful color palette that flows effortlessly from room to room.',
        ],
      },
      {
        heading: 'What’s Included',
        body: [],
        items: [
          {
            label: 'Interior & Exterior Palettes',
            text: 'Expert selection for walls, ceilings, trim, cabinetry, doors, and exterior facades.',
          },
          {
            label: 'Lighting Analysis',
            text: 'We evaluate how your home’s natural and artificial light will affect different paint undertones.',
          },
          {
            label: 'Full Specification List',
            text: 'You’ll receive the exact brand, color names, numbers, and recommended finishes (sheens) to hand directly to your painter.',
          },
        ],
        outro:
          'Stop buying endless sample pots. Let’s find the exact shades that will make your space feel cohesive, bright, and perfectly tailored to your style.',
      },
    ],
    highlights: [
      'Interior & exterior palettes for walls, ceilings, trim, cabinetry, and doors',
      'Lighting analysis for how natural and artificial light affect undertones',
      'A full specification list: exact brand, color names, numbers, and finishes',
      'A paint-ready palette you can hand straight to your painter',
    ],
    faqs: [
      {
        question: 'How long does a color consultation take?',
        answer:
          'Most consultations take one to two hours depending on the number of rooms. You receive specific paint recommendations you can act on right away.',
      },
      {
        question: 'What will I receive at the end?',
        answer:
          'You’ll get a full specification list with the exact brand, color names, numbers, and recommended finishes (sheens) for every surface — ready to hand directly to your painter. No guesswork, no sample pots.',
      },
    ],
    image: '/images/gallery/interior_design/kitchen2.avif',
    imageAlt: 'A bright kitchen styled with a cohesive color palette',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
