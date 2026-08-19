'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

/**
 * The widget styles itself like a full hosted page (min-height: 100vh plus
 * outer padding), which adds a large blank band above the fields when embedded.
 * Its shadow root is open, so we inject overrides to make it sit flush.
 */
const SHADOW_OVERRIDES = `
  .wedy-form-container {
    min-height: 0 !important;
    padding: 0 !important;
    background: transparent !important;
  }
  .wedy-form-card { padding-top: 0 !important; }
`;

interface WedyLeadFormProps {
  /** Wedy lead-form ID. Falls back to NEXT_PUBLIC_WEDY_FORM_ID. */
  formId?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

const WIDGET_URL =
  process.env.NEXT_PUBLIC_WEDY_WIDGET_URL || 'https://www.wedypro.ai/widget.js';

/**
 * Embeds a Wedy lead form using the official widget snippet:
 *   <div data-wedy-form="{id}" data-wedy-theme="..."></div>
 *   <script src="{origin}/widget.js" async defer></script>
 *
 * The widget script hydrates the data-attribute div on the client.
 * Set NEXT_PUBLIC_WEDY_FORM_ID (and optionally NEXT_PUBLIC_WEDY_WIDGET_URL).
 */
export function WedyLeadForm({ formId, theme = 'light', className }: WedyLeadFormProps) {
  const id = formId || process.env.NEXT_PUBLIC_WEDY_FORM_ID || siteConfig.wedyFormId;
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const injectOverrides = () => {
      const root = host.shadowRoot;
      if (!root || root.querySelector('style[data-embed-overrides]')) return false;
      const style = document.createElement('style');
      style.setAttribute('data-embed-overrides', '');
      style.textContent = SHADOW_OVERRIDES;
      root.appendChild(style);
      return true;
    };

    // The widget script attaches the shadow root asynchronously; poll briefly.
    if (injectOverrides()) return;
    const interval = window.setInterval(() => {
      if (injectOverrides()) window.clearInterval(interval);
    }, 200);
    const timeout = window.setTimeout(() => window.clearInterval(interval), 15000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [id]);

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
      <div ref={hostRef} data-wedy-form={id} data-wedy-theme={theme} />
      <Script src={WIDGET_URL} strategy="afterInteractive" />
    </div>
  );
}
