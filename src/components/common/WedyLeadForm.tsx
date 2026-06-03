'use client';

import Script from 'next/script';
import { cn } from '@/lib/utils';

interface WedyLeadFormProps {
  /** Wedy lead-form ID. Falls back to NEXT_PUBLIC_WEDY_FORM_ID. */
  formId?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

const WIDGET_URL =
  process.env.NEXT_PUBLIC_WEDY_WIDGET_URL || 'https://app.wedyapp.com/widget.js';

/**
 * Embeds a Wedy lead form using the official widget snippet:
 *   <div data-wedy-form="{id}" data-wedy-theme="..."></div>
 *   <script src="{origin}/widget.js" async defer></script>
 *
 * The widget script hydrates the data-attribute div on the client.
 * Set NEXT_PUBLIC_WEDY_FORM_ID (and optionally NEXT_PUBLIC_WEDY_WIDGET_URL).
 */
export function WedyLeadForm({ formId, theme = 'light', className }: WedyLeadFormProps) {
  const id = formId || process.env.NEXT_PUBLIC_WEDY_FORM_ID;

  if (!id) {
    return (
      <div
        className={cn(
          'rounded-md border border-dashed border-charcoal/30 bg-muted/60 p-8 text-center text-sm text-muted-foreground',
          className,
        )}
      >
        <p className="font-medium text-charcoal">Contact form not yet configured</p>
        <p className="mt-2">
          Set <code className="font-accent not-italic">NEXT_PUBLIC_WEDY_FORM_ID</code> to your
          Wedy lead-form ID to display the booking form here.
        </p>
        <p className="mt-3">
          In the meantime, email us at{' '}
          <a
            href="mailto:bloomingdesignllc@gmail.com"
            className="text-gold underline underline-offset-4"
          >
            bloomingdesignllc@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className={cn('wedy-form-container', className)}>
      <div data-wedy-form={id} data-wedy-theme={theme} />
      <Script src={WIDGET_URL} strategy="afterInteractive" />
    </div>
  );
}
