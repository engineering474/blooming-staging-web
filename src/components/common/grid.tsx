import { cn } from '@/lib/utils';

/**
 * Decorative grid primitives — a thin rule with small "+" markers on each end.
 * Used to bracket the homepage stats band. Colors default to brand-neutral
 * (border / charcoal) and can be overridden via props.
 */

/** Small "+" marker placed at a divider intersection. */
export function PlusIcon({
  color = 'var(--charcoal)',
  size = 10,
  className,
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn('relative opacity-30', className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-0 h-full -translate-x-1/2"
        style={{ width: 1, backgroundColor: color }}
      />
      <div
        className="absolute left-0 top-1/2 w-full -translate-y-1/2"
        style={{ height: 1, backgroundColor: color }}
      />
    </div>
  );
}

/** Horizontal divider line with a PlusIcon at each end. */
export function GridDivider({
  className,
  plusColor,
}: {
  className?: string;
  plusColor?: string;
}) {
  return (
    <div className={cn('relative h-px w-full bg-border', className)}>
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
        <PlusIcon color={plusColor} />
      </div>
      <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2">
        <PlusIcon color={plusColor} />
      </div>
    </div>
  );
}
