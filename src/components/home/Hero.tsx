import Link from 'next/link';
import { BlurImage } from '@/components/common/BlurImage';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { marketingImages, NEUTRAL_BLUR } from '@/lib/images';
import { siteConfig } from '@/lib/site-config';
import { primaryCta } from '@/lib/navigation';

/** Full-bleed hero with brand wordmark, tagline, and primary CTA. */
export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <BlurImage
        src={marketingImages.hero}
        blurDataURL={NEUTRAL_BLUR}
        alt="An elegantly designed and staged living space"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Warm scrim for legibility */}
      <div className="absolute inset-0 bg-charcoal/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />

      <Container className="relative z-10 flex flex-col items-center text-center text-cream">
        <span className="tracking-brand mb-6 text-xs uppercase text-cream/85 sm:text-sm">
          {siteConfig.regionName}
          <span className="mx-2 text-cream/50">&bull;</span>
          Home Staging &amp; Interior Design
        </span>
        <h1 className="font-display text-4xl leading-[1.05] text-balance sm:text-6xl md:text-7xl">
          Blooming Staging
          <span className="block">
            <span className="font-accent text-3xl sm:text-5xl md:text-6xl">and</span> Design
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 text-pretty sm:text-lg">
          {siteConfig.tagline}. We create elegant, timeless spaces — and help homes sell
          faster and for more.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gold" size="lg">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button asChild variant="light" size="lg">
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
