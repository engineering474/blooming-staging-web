import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { JsonLd } from '@/components/common/JsonLd';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { CtaSection } from '@/components/home/CtaSection';
import { buildBreadcrumb, buildCollectionPage } from '@/lib/seo/json-ld';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse our portfolio of home staging and interior design projects across Colorado — see how Blooming transforms spaces.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: `Gallery | ${siteConfig.name}`,
    description: 'A portfolio of staging and interior design projects across Colorado.',
    url: '/gallery',
  },
};

export default function GalleryPage() {
  // Only show filters for services that actually have projects.
  const usedServiceSlugs = new Set(projects.map((p) => p.serviceSlug));
  const filters = services
    .filter((s) => usedServiceSlugs.has(s.slug))
    .map((s) => ({ slug: s.slug, label: s.shortName }));

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
          ]),
          buildCollectionPage(
            'Gallery',
            '/gallery',
            projects.map((p) => ({
              name: p.title,
              path: `/gallery/${p.slug}`,
              image: p.cover,
            })),
          ),
        ]}
      />

      <PageHero
        eyebrow="Our Work"
        title="Project gallery"
        description="A selection of homes we've staged and designed across Colorado. Filter by service to see what we can do for your space."
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Gallery' }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <GalleryGrid projects={projects} filters={filters} />
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
