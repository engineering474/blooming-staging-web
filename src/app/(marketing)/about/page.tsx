import type { Metadata } from 'next';
import { BlurImage } from '@/components/common/BlurImage';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/common/SectionHeading';
import { GridDivider } from '@/components/common/grid';
import { JsonLd } from '@/components/common/JsonLd';
import { CtaSection } from '@/components/home/CtaSection';
import { buildBreadcrumb, buildOrganization } from '@/lib/seo/json-ld';
import { NEUTRAL_BLUR } from '@/lib/images';
import { siteConfig } from '@/lib/site-config';
import { milestones, brandValues } from '@/content/about';

export const metadata: Metadata = {
  title: 'About',
  description: `Since 2020, founders ${siteConfig.founders.join(
    ' and ',
  )} have hand-staged over 500 homes across Colorado’s Front Range — a hands-on, founder-run boutique staging company built from scratch.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      'A founder-run Colorado boutique staging company — built from scratch, hands-on from the first design concept to the last sofa up the stairs.',
    url: '/about',
  },
};

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
        eyebrow="Our Story"
        title="Transforming houses into homes since 2020"
        description="A powerhouse boutique staging company built from scratch across Colorado’s Front Range — hands-on from the first design concept to the last sofa up the stairs."
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]}
      />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-border">
              <BlurImage
                src="/images/about/4.jpeg"
                blurDataURL={NEUTRAL_BLUR}
                alt={`${siteConfig.founders.join(' and ')}, founders of ${siteConfig.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <SectionHeading
                align="left"
                eyebrow="Who We Are"
                title="A blank canvas and a big dream"
              />
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                Since 2020, we’ve been transforming houses into homes across the entire Front
                Range—from Longmont to Colorado Springs, Arvada to Castle Rock, and everywhere in
                between. What started as a blank canvas and a big dream has grown into a powerhouse
                boutique staging company. To date, we have proudly staged over 500 homes,
                representing over $250 million in local real estate.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                But we didn’t buy our way here. We built this company from scratch, fueled entirely
                by sweat equity, late nights, and a clear vision. Today, we own every single piece of
                our warehouse inventory, but we started with just a truck and a determination to
                succeed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="bg-muted py-16 sm:py-24">
        <Container>
          <GridDivider />
          <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
            {milestones.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center gap-3 bg-muted px-6 py-10 text-center"
              >
                <span className="font-display text-4xl leading-none text-gold sm:text-5xl">
                  {m.value}
                </span>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
          <GridDivider />
        </Container>
      </section>

      {/* Hands-on */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex flex-col gap-5 lg:order-1">
              <SectionHeading
                align="left"
                eyebrow="Hands-On"
                title="Just the two of us"
              />
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                When we say we are hands-on, we mean it literally. We don’t outsource, and we don’t
                compromise. It is just the two of us doing absolutely everything from start to finish.
                We are the ones driving the box truck, building the furniture, planning the design
                concepts, and carrying every single sofa up the stairs.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                Because we own 100% of our own inventory, we have total creative control. Every single
                piece of artwork, accessory, and furniture item in our warehouse has been hand-picked
                by us to ensure your home stands out in the Colorado market.
              </p>
            </div>
            <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-border lg:order-2">
              <BlurImage
                src="/images/about/1.jpg"
                blurDataURL={NEUTRAL_BLUR}
                alt="The founders moving and styling staging furniture in the studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section className="bg-muted py-16 sm:py-24">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The founders, the muscle, and the minds"
            description="When you hire us, you’re not getting a rotating crew of strangers. You are getting the founders, the muscle, and the minds behind a $250M+ track record—dedicated to getting you top dollar for your home."
          />
          <div className="mx-auto mt-12 max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-border">
              <BlurImage
                src="/images/about/3.jpg"
                blurDataURL={NEUTRAL_BLUR}
                alt={`${siteConfig.founders.join(' and ')}, co-founders of ${siteConfig.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 28rem"
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-center font-display text-2xl">
              {siteConfig.founders.join(' & ')}
            </p>
            <p className="text-center text-sm text-muted-foreground">Co-Founders</p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our values"
            description="The principles behind every project we take on."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandValues.map((value) => (
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

      <CtaSection />
    </>
  );
}
