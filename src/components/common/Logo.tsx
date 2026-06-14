import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

interface LogoProps {
  /** Color treatment for the wordmark text — light for dark backgrounds. */
  tone?: 'dark' | 'light';
  className?: string;
  /** Hide the "STAGING and DESIGN" sub-line (compact contexts). */
  compact?: boolean;
}

/**
 * Brand lockup: the official circular badge mark + the wordmark.
 *
 * The badge (`/images/logo.jpg`) is self-contained, so it reads on the cream
 * header, when floating over a hero, and on the dark footer alike — unlike the
 * horizontal wordmark files, which have solid white backgrounds. The wordmark
 * text is rendered in brand type and adapts to `tone`.
 */
export function Logo({ tone = 'dark', className, compact = false }: LogoProps) {
  const main = tone === 'light' ? 'text-cream' : 'text-charcoal';
  const sub = tone === 'light' ? 'text-cream/80' : 'text-muted-foreground';

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <span className="relative size-11 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/images/logo.jpg"
          alt=""
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
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
      </span>
    </Link>
  );
}
