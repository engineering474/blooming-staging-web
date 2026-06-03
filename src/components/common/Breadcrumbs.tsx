import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Crumb {
  name: string;
  /** Omit href on the current (last) page. */
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  /** Light text for dark/overlay backgrounds. */
  tone?: 'dark' | 'light';
  className?: string;
}

/** Visual breadcrumb trail. Pair with buildBreadcrumb() JSON-LD for SEO. */
export function Breadcrumbs({ items, tone = 'dark', className }: BreadcrumbsProps) {
  const base = tone === 'light' ? 'text-cream/70' : 'text-muted-foreground';
  const current = tone === 'light' ? 'text-cream' : 'text-charcoal';
  const hover = tone === 'light' ? 'hover:text-cream' : 'hover:text-gold';

  return (
    <nav aria-label="Breadcrumb" className={cn('text-xs', className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className={cn(base, hover, 'transition-colors')}>
                  {item.name}
                </Link>
              ) : (
                <span className={cn(isLast ? current : base, 'font-medium')} aria-current={isLast ? 'page' : undefined}>
                  {item.name}
                </span>
              )}
              {!isLast && <ChevronRight className={cn('size-3', base)} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
