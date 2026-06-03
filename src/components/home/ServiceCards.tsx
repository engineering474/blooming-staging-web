import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ServiceCard } from '@/components/services/ServiceCard';
import { services } from '@/content/services';

/** Three-column service overview (Staging · Design · Color Consult). */
export function ServiceCards() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Services tailored to your space"
          description="From preparing a listing to sell to reimagining the home you love, we bring an elegant, professional eye to every project."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
