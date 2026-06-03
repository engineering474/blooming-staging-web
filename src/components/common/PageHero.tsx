import { BlurImage } from '@/components/common/BlurImage';
import { Container } from '@/components/common/Container';
import { Breadcrumbs, type Crumb } from '@/components/common/Breadcrumbs';
import { NEUTRAL_BLUR } from '@/lib/images';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Crumb[];
  /** Optional full-bleed background image. */
  image?: string;
  imageAlt?: string;
  align?: 'left' | 'center';
}

/**
 * Inner-page hero. Two modes:
 *  - plain (cream background) for text pages like About/Services index/Contact
 *  - image background (with scrim) for detail pages
 * Includes top padding to clear the fixed header.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  imageAlt = '',
  align = 'center',
}: PageHeroProps) {
  const hasImage = Boolean(image);
  const tone = hasImage ? 'light' : 'dark';

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        hasImage ? 'text-cream' : 'bg-cream text-charcoal',
      )}
    >
      {hasImage && (
        <>
          <BlurImage
            src={image!}
            blurDataURL={NEUTRAL_BLUR}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/55" />
        </>
      )}

      <Container
        className={cn(
          'relative z-10 flex flex-col gap-5 pb-16 pt-36 sm:pt-40',
          align === 'center' ? 'items-center text-center' : 'items-start text-left',
          hasImage && 'min-h-[52vh] justify-end',
        )}
      >
        {breadcrumbs && (
          <Breadcrumbs items={breadcrumbs} tone={tone} className={align === 'center' ? 'mx-auto' : ''} />
        )}
        {eyebrow && (
          <span className={cn('tracking-brand text-xs font-medium uppercase', hasImage ? 'text-cream/85' : 'text-gold')}>
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl leading-tight text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              'max-w-2xl text-base leading-relaxed text-pretty sm:text-lg',
              hasImage ? 'text-cream/90' : 'text-muted-foreground',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
