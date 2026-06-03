import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

interface LogoProps {
  /** Color treatment — light for dark backgrounds. */
  tone?: 'dark' | 'light';
  className?: string;
  /** Hide the "STAGING and DESIGN" sub-line (compact contexts). */
  compact?: boolean;
}

/**
 * Wordmark logo recreated in brand type (Cormorant display + letterspaced label),
 * matching the style-guide lockup. Swap for the official SVG when available.
 */
export function Logo({ tone = 'dark', className, compact = false }: LogoProps) {
  const main = tone === 'light' ? 'text-cream' : 'text-charcoal';
  const sub = tone === 'light' ? 'text-cream/80' : 'text-muted-foreground';

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn('group inline-flex flex-col items-center leading-none', className)}
    >
      <span
        className={cn(
          'font-display text-2xl tracking-[0.18em] uppercase sm:text-[1.7rem]',
          main,
        )}
      >
        Blooming
      </span>
      {!compact && (
        <span className={cn('mt-1 text-[0.6rem] tracking-brand uppercase', sub)}>
          Staging <span className="font-accent normal-case">and</span> Design
        </span>
      )}
    </Link>
  );
}
