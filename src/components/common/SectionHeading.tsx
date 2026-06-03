import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** Small letterspaced eyebrow label above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

/** Consistent section header: eyebrow + display title + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  as: Title = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="tracking-brand text-xs font-medium uppercase text-gold">
          {eyebrow}
        </span>
      )}
      <Title
        className={cn(
          'font-display text-3xl leading-tight text-balance sm:text-4xl md:text-5xl',
        )}
      >
        {title}
      </Title>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
