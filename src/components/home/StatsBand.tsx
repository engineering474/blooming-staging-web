'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { GridDivider } from '@/components/common/grid';
import type { Stat } from '@/interfaces/content';
import { stagingStats } from '@/content/stats';

/** Fire once when the element first scrolls into view. */
function useInViewOnce(threshold = 0.4) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/**
 * A single statistic that counts up from 0 to its value the first time it
 * scrolls into view. Width is reserved with an invisible final-value copy so the
 * layout never shifts while the number animates. Respects reduced-motion.
 */
function StatValue({ value, prefix = '', suffix = '' }: Pick<Stat, 'value' | 'prefix' | 'suffix'>) {
  const { ref, inView } = useInViewOnce(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="relative inline-flex font-display text-5xl leading-none text-gold tabular-nums sm:text-6xl"
    >
      {/* Invisible final value reserves the width to prevent layout shift */}
      <span className="invisible">{prefix}{value}{suffix}</span>
      <span className="absolute inset-0">{prefix}{display}{suffix}</span>
    </span>
  );
}

/**
 * Homepage stats band — animated count-up proof points framed by "+" grid
 * dividers. Content comes from `src/content/stats.ts`.
 */
export function StatsBand() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Staging Works"
          title="The numbers behind a staged home"
          description="In a market where buyers shop online first, staging is one of the highest-return moves a seller can make — selling faster and for more."
        />

        <GridDivider className="mt-14" />

        {/*
          Responsive grid, tuned for the curated set of 5 stats:
            mobile  → 1 col, stacked      (rules between rows)
            sm      → 2 cols; the odd 5th spans full width so there's no orphan
            lg      → 1 clean row of 5
          The 1px `gap` over a `bg-border` backing paints crisp separators in both
          axes at every breakpoint, and because no track is ever left empty it
          never shows a grey block.
        */}
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {stagingStats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center gap-4 bg-cream px-6 py-10 text-center sm:last:col-span-2 lg:last:col-span-1"
            >
              <StatValue value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
                {stat.label}
                {stat.source && <span className="text-muted-foreground/70"> ({stat.source})</span>}
              </p>
            </div>
          ))}
        </div>

        <GridDivider />
      </Container>
    </section>
  );
}
