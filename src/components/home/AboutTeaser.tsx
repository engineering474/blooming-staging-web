import Link from 'next/link';
import { BlurImage } from '@/components/common/BlurImage';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { marketingImages, NEUTRAL_BLUR } from '@/lib/images';

const VALUES = ['Elegant', 'Timeless', 'Accessible', 'Professional'];

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
              alt="Interior designer arranging a styled vignette"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <span className="tracking-brand text-xs font-medium uppercase text-gold">
              Our Studio
            </span>
            <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
              Thoughtful design, rooted in how you live
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              Blooming Staging and Design is a Colorado studio founded on a simple belief:
              beautiful spaces should be accessible. Whether we are staging a listing to sell
              or designing the home of your dreams, we bring a fresh, refined eye and a
              warm, professional process to every project.
            </p>

            <ul className="flex flex-wrap gap-3">
              {VALUES.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-charcoal/15 bg-cream px-4 py-1.5 text-sm text-charcoal/80"
                >
                  {value}
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
