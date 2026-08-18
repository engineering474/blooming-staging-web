import Link from 'next/link';
import { BlurImage } from '@/components/common/BlurImage';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { marketingImages, NEUTRAL_BLUR } from '@/lib/images';
import { siteConfig } from '@/lib/site-config';
import { brandValues } from '@/content/about';

/** Split image + copy block introducing the studio and its values. */
export function AboutTeaser() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[5/6] overflow-hidden rounded-lg sm:aspect-[4/3] lg:aspect-[5/6]">
            <BlurImage
              src={marketingImages.aboutTeaser}
              blurDataURL={NEUTRAL_BLUR}
              alt="The founders of Blooming Staging and Design"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <span className="tracking-brand text-xs font-medium uppercase text-gold">
              Our Story
            </span>
            <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
              Transforming houses into homes since 2020
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              Since 2020, founders {siteConfig.founders.join(' and ')}{' '}
              have built a powerhouse boutique staging company from scratch across
              Colorado&apos;s Front Range — hand-staging
              over 500 homes and more than $250M in local real estate. We own every piece of our
              warehouse inventory and stay hands-on from the first design concept to the last sofa up
              the stairs.
            </p>

            <ul className="flex flex-wrap gap-3">
              {brandValues.map((value) => (
                <li
                  key={value.title}
                  className="rounded-full border border-charcoal/15 bg-cream px-4 py-1.5 text-sm text-charcoal/80"
                >
                  {value.title}
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <Button asChild variant="outline">
                <Link href="/about">More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
