import type { Metadata } from 'next';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { JsonLd } from '@/components/common/JsonLd';
import { WedyLeadForm } from '@/components/common/WedyLeadForm';
import { buildBreadcrumb, buildOrganization } from '@/lib/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get a free quote for home staging, interior design, or a color consultation in Colorado. Contact Blooming Staging and Design today.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: 'Get a free, no-obligation quote for staging and design in Colorado.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          buildOrganization(),
          buildBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Get in Touch"
        title="Let's talk about your project"
        description="Tell us a little about your home or listing and we'll put together a free, no-obligation quote."
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Contact' }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[20rem_1fr]">
            {/* Contact details */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="tracking-brand text-xs uppercase text-gold">Reach us</h2>
                <ul className="mt-5 flex flex-col gap-4 text-sm">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-3 text-charcoal/85 transition-colors hover:text-gold"
                    >
                      <Mail className="size-5 shrink-0 text-gold" />
                      {siteConfig.email}
                    </a>
                  </li>
                  {siteConfig.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                        className="inline-flex items-center gap-3 text-charcoal/85 transition-colors hover:text-gold"
                      >
                        <Phone className="size-5 shrink-0 text-gold" />
                        {phone}
                      </a>
                    </li>
                  ))}
                  <li className="inline-flex items-center gap-3 text-charcoal/85">
                    <MapPin className="size-5 shrink-0 text-gold" />
                    Serving {siteConfig.regionName}
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="tracking-brand text-xs uppercase text-gold">Follow along</h2>
                <div className="mt-5 flex gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-charcoal/20 transition-colors hover:bg-charcoal hover:text-cream"
                  >
                    <Instagram className="size-5" />
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-charcoal/20 transition-colors hover:bg-charcoal hover:text-cream"
                  >
                    <Facebook className="size-5" />
                  </a>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-6 ring-1 ring-border">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Prefer email? Reach us directly at{' '}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-gold underline underline-offset-4"
                  >
                    {siteConfig.email}
                  </a>{' '}
                  and we&apos;ll get right back to you.
                </p>
              </div>
            </div>

            {/* Lead form */}
            <div className="rounded-lg bg-cream p-2 ring-1 ring-border sm:p-6">
              <WedyLeadForm theme="light" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
