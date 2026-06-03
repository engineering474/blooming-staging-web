import { Plus } from 'lucide-react';
import type { FAQ } from '@/interfaces/content';

interface FaqProps {
  items: FAQ[];
}

/**
 * Accessible FAQ list using native <details>/<summary> — no client JS needed,
 * so it works in fully static output. Pair with buildFaqPage() JSON-LD.
 */
export function Faq({ items }: FaqProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
            <span className="font-display text-xl text-charcoal">{item.question}</span>
            <Plus className="size-5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
