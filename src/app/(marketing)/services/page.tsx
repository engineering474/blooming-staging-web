import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { JsonLd } from '@/components/common/JsonLd';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CtaSection } from '@/components/home/CtaSection';
import { buildBreadcrumb, buildCollectionPage } from '@/lib/seo/json-ld';
import { services } from '@/content/services';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Home staging, interior design, and color consultation in Colorado. Explore how Blooming Staging and Design can help you sell faster or love your home more.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      'Home staging, interior design, and color consultation across Colorado.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          buildCollectionPage(
            'Services',
            '/services',
            services.map((s) => ({
              name: s.name,
              path: `/services/${s.slug}`,
              image: s.image,
            })),
          ),
        ]}
      />

      <PageHero
        eyebrow="What We Do"
        title="Our services"
        description="Whether you're preparing a home to sell or making the one you have feel new again, we offer a service to match."
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Services' }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
