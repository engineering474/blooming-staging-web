import type { Metadata } from 'next';
import { BlurImage } from '@/components/common/BlurImage';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/common/SectionHeading';
import { JsonLd } from '@/components/common/JsonLd';
import { CtaSection } from '@/components/home/CtaSection';
import { buildBreadcrumb, buildOrganization } from '@/lib/seo/json-ld';
import { marketingImages, NEUTRAL_BLUR, unsplash } from '@/lib/images';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Blooming Staging and Design is a Colorado studio founded by Liliya Zelem and Amanda Boucher, offering elegant, accessible home staging and interior design.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      'A Colorado home staging and interior design studio built on elegant, timeless, accessible design.',
    url: '/about',
  },
};

const VALUES = [
  {
    title: 'Elegant',
    body: 'We believe in refined, considered spaces — beautiful in the details and never overdone.',
  },
  {
    title: 'Timeless',
    body: 'We design for the long term, balancing what is current with what will still feel right in years to come.',
  },
  {
    title: 'Accessible',
    body: 'Great design should not be reserved for the few. We meet you where you are, with options for every budget.',
  },
  {
    title: 'Professional',
    body: 'From first consultation to final reveal, we bring a calm, organized, dependable process.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          buildOrganization(),
          buildBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Our Studio"
        title="Innovative ideas, stylish designs"
        description="We started Blooming to make elegant, professional design accessible to homeowners and real estate professionals across Colorado."
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]}
      />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <BlurImage
                src={marketingImages.aboutTeaser}
                blurDataURL={NEUTRAL_BLUR}
                alt="The Blooming Staging and Design studio at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <SectionHeading
                align="left"
                eyebrow="Who We Are"
                title="A Colorado studio with a passion for beautiful spaces"
              />
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                Blooming Staging and Design was founded by{' '}
                {siteConfig.founders.join(' and ')} on a shared belief: that thoughtful design has
                the power to transform not just a room, but how it feels to live in or sell a home.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                We help real estate agents present listings that sell faster and for more, and we
                help homeowners create interiors that feel fresh, warm, and unmistakably theirs.
                Whether it is a full home staging, a complete redesign, or simply choosing the
                right paint colors, we bring the same eye for detail and the same commitment to a
                smooth, professional experience.
              </p>
              <p className="font-accent text-lg text-charcoal/80">
                Elegant. Timeless. Accessible. Professional.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our values"
            description="The principles behind every project we take on."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-3 rounded-lg bg-cream p-6 ring-1 ring-border"
              >
                <h3 className="font-display text-2xl text-gold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Meet the Team" title="The founders" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
            {siteConfig.founders.map((name, i) => (
              <div key={name} className="flex flex-col items-center text-center">
                <div className="relative size-40 overflow-hidden rounded-full ring-1 ring-border">
                  <BlurImage
                    src={unsplash(
                      i === 0
                        ? 'photo-1573496359142-b8d87734a5a2'
                        : 'photo-1580489944761-15a19d654956',
                      400,
                    )}
                    blurDataURL={NEUTRAL_BLUR}
                    alt={`${name}, co-founder`}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl">{name}</h3>
                <p className="text-sm text-muted-foreground">Co-Founder</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
