import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: 'bg-charcoal text-cream hover:bg-charcoal/90',
        gold: 'bg-gold text-cream hover:bg-gold/90',
        outline:
          'border border-charcoal/30 bg-transparent text-charcoal hover:bg-charcoal hover:text-cream',
        ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5',
        light:
          'border border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-charcoal',
      },
      size: {
        default: 'h-11 px-7 py-2',
        sm: 'h-9 px-5',
        lg: 'h-13 px-9 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render the single child element with button styles (e.g. wrap a <Link>). */
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export { Button, buttonVariants };
