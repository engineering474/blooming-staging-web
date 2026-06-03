import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /** Narrower max-width for text-heavy content. */
  size?: 'default' | 'narrow' | 'wide';
}

const SIZES = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
} as const;

/** Centered, responsive content width with consistent horizontal padding. */
export function Container({
  as: Tag = 'div',
  size = 'default',
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn('mx-auto w-full px-6 sm:px-8 lg:px-10', SIZES[size], className)}
      {...props}
    />
  );
}
