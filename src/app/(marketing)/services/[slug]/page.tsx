import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Faq } from '@/components/common/Faq';
import { JsonLd } from '@/components/common/JsonLd';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/home/CtaSection';
import {
  buildBreadcrumb,
  buildFaqPage,
  buildService,
} from '@/lib/seo/json-ld';
import { services, getServiceBySlug, serviceSlugs } from '@/content/services';
import { primaryCta } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render a static page for every service. */
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} in ${siteConfig.regionName}`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.summary,
      url: `/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          buildService(service),
          buildBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          ...(service.faqs.length ? [buildFaqPage(service.faqs)] : []),
        ]}
      />

      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        align="left"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: service.name },
        ]}
      />

      {/* Body + highlights */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
            <div className="flex flex-col gap-10">
              {service.sections.map((section) => (
                <div key={section.heading} className="flex flex-col gap-4">
                  <h2 className="font-display text-3xl">{section.heading}</h2>
                  {section.body.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-muted-foreground text-pretty">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Highlights sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg bg-muted p-7 ring-1 ring-border">
                <h3 className="tracking-brand text-xs uppercase text-gold">What&apos;s included</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-charcoal/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="gold" className="mt-7 w-full">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-muted py-16 sm:py-24">
          <Container size="narrow">
            <SectionHeading eyebrow="Questions" title="Frequently asked" className="mb-10" />
            <Faq items={service.faqs} />
          </Container>
        </section>
      )}

      {/* Other services */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Explore More" title="Other services" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex flex-col gap-2 rounded-lg bg-cream p-7 ring-1 ring-border transition-all hover:ring-gold/40"
              >
                <h3 className="font-display text-2xl group-hover:text-gold">{other.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{other.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
