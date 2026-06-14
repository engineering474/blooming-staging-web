import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { primaryCta } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import type { PricingTier } from '@/interfaces/content';

interface PricingTableProps {
  tiers: PricingTier[];
}

/**
 * Pricing tiers for a service detail page — a responsive grid of equal-height
 * cards with a prominent price and a CTA, with one optional "featured" tier
 * highlighted in charcoal. Content is plain data (`Service.pricing`) so tiers
 * can be edited or moved to a CMS without touching this component.
 */
export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tiers.map((tier) => {
        const featured = tier.featured ?? false;
        return (
          <div
            key={tier.id}
            className={cn(
              'relative flex h-full flex-col rounded-lg p-6 transition-all hover:ring-gold/40 sm:p-7',
              featured
                ? 'bg-charcoal text-cream shadow-md ring-1 ring-charcoal hover:shadow-lg hover:ring-gold/50'
                : 'bg-cream shadow-sm ring-1 ring-border hover:shadow-md',
            )}
          >
            {featured && (
              <span className="tracking-brand absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1 text-xs font-medium uppercase text-cream">
                Most popular
              </span>
            )}

            {/* Name — reserve two lines so the price rows line up across cards */}
            <h3
              className={cn(
                'flex min-h-[3.25rem] items-start font-display text-2xl leading-snug text-balance',
                featured && 'text-cream',
              )}
            >
              {tier.name}
            </h3>

            {/* Price + cadence */}
            <div className="mt-4">
              <span className="font-display text-3xl leading-none text-gold">
                {tier.price}
              </span>
              <span
                className={cn(
                  'tracking-brand mt-2.5 block text-xs font-medium uppercase',
                  featured ? 'text-cream/50' : 'text-muted-foreground',
                )}
              >
                {tier.unit ?? 'Flat rate'}
              </span>
            </div>

            {/* Divider */}
            <div className={cn('my-6 h-px w-full', featured ? 'bg-cream/15' : 'bg-border')} />

            <p
              className={cn(
                'flex-1 text-sm leading-relaxed text-pretty',
                featured ? 'text-cream/75' : 'text-muted-foreground',
              )}
            >
              {tier.description}
            </p>

            <Button
              asChild
              variant={featured ? 'gold' : 'outline'}
              size="sm"
              className="mt-8 w-full"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
