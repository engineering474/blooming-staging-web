import { Star } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { testimonials } from '@/content/testimonials';

/** "What Our Clients Say" — three testimonial cards. */
export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What our clients say" />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col rounded-lg bg-cream p-7 shadow-sm ring-1 ring-border"
            >
              {t.rating && (
                <div className="mb-4 flex gap-0.5 text-gold" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
              )}
              <blockquote className="flex-1 font-accent text-lg leading-relaxed text-charcoal/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="block font-medium text-charcoal">{t.author}</span>
                <span className="block text-sm text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
