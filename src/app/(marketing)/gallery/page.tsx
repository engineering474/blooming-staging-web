import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { JsonLd } from '@/components/common/JsonLd';
import { AlbumGallery } from '@/components/gallery/AlbumGallery';
import { CtaSection } from '@/components/home/CtaSection';
import { buildBreadcrumb, buildCollectionPage } from '@/lib/seo/json-ld';
import { galleryCategories } from '@/content/gallery';
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
  // Flatten albums for the CollectionPage JSON-LD (cover image per album).
  const albumItems = galleryCategories.flatMap((category) =>
    category.albums.map((album) => ({
      name: `${category.title} — ${album.label}`,
      path: '/gallery',
      image: album.images[0]?.src,
    })),
  );

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
          ]),
          buildCollectionPage('Gallery', '/gallery', albumItems),
        ]}
      />

      <PageHero
        eyebrow="Our Work"
        title="Project gallery"
        description="A selection of homes we've staged and designed across Colorado — browse by room and project to see what we can do for your space."
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Gallery' }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <AlbumGallery categories={galleryCategories} />
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
