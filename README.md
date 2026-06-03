# Blooming Staging and Design — Website

Marketing website for [Blooming Staging and Design](https://www.bloomingstaginganddesign.com), a
Colorado home staging and interior design studio. Statically-generated, SEO-optimized, and built to
the brand style guide.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** with brand tokens (`src/app/globals.css`)
- **shadcn/ui** conventions (new-york) + **lucide-react** icons
- Fonts via `next/font/google` (free substitutes for the paid brand fonts)

## Getting started

Requires **Node.js ≥ 20.9** (see `.nvmrc`).

```bash
nvm use            # switch to Node 22
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Environment

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (metadata, sitemap, JSON-LD) |
| `NEXT_PUBLIC_WEDY_FORM_ID` | Wedy lead-form ID for the contact form |
| `NEXT_PUBLIC_WEDY_WIDGET_URL` | Origin serving the Wedy `widget.js` |
| `NEXT_PUBLIC_GA_ID` | (optional) Google Analytics measurement ID |

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Root: fonts + global metadata
│   ├── globals.css           # Tailwind v4 + brand tokens
│   └── (marketing)/          # Navbar + Footer wrapped pages
├── components/
│   ├── ui/                   # Primitives (Button, …)
│   ├── layout/               # Navbar, Footer
│   ├── common/               # Container, SectionHeading, BlurImage, JsonLd, Logo, WedyLeadForm
│   └── home/                 # Homepage sections
├── content/                  # Single source of truth (services, projects, testimonials)
├── interfaces/               # Shared content types
└── lib/
    ├── site-config.ts        # Business identity / NAP
    ├── navigation.ts         # Nav + CTA config
    ├── page-theme.ts         # Per-route header treatment
    ├── images.ts             # Curated placeholder imagery
    └── seo/json-ld.ts        # Schema.org builders
```

## Content

All page content lives in `src/content/*`. Adding a service or project there
automatically generates its page, navigation/cards, sitemap entry, and JSON-LD. Replace the
placeholder Unsplash imagery (`src/lib/images.ts` + `src/content/*`) with real Blooming photography.

## Brand

Palette and typography are defined in `src/app/globals.css` and follow the Blooming Staging and Design
brand style guide (Pier 9 Design, 2020). The paid brand fonts (Heimat Display, Proxima Nova, FreightBig
Pro) are substituted with the closest free Google Fonts (Cormorant Garamond, Montserrat, EB Garamond).

## Deployment

Designed to deploy as static/SSG (e.g. Vercel). No server runtime is required for core pages.
