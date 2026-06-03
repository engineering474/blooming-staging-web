import Link from 'next/link';
import { BlurImage } from '@/components/common/BlurImage';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { marketingImages, NEUTRAL_BLUR } from '@/lib/images';
import { primaryCta } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';

/** Closing call-to-action band with a full-bleed image background. */
export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <BlurImage
        src={marketingImages.ctaBackground}
        blurDataURL={NEUTRAL_BLUR}
        alt="A warm, inviting living room"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />

      <Container className="relative z-10 flex flex-col items-center text-center text-cream">
        <h2 className="font-display text-3xl leading-tight text-balance sm:text-5xl">
          Ready to transform your space?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 text-pretty">
          Tell us about your project and we&apos;ll put together a free, no-obligation quote.
          Serving {siteConfig.regionName} and the surrounding area.
        </p>
        <div className="mt-9">
          <Button asChild variant="gold" size="lg">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
