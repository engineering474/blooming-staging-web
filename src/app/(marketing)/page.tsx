import { Hero } from '@/components/home/Hero';
import { ServiceCards } from '@/components/home/ServiceCards';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Testimonials } from '@/components/home/Testimonials';
import { CtaSection } from '@/components/home/CtaSection';
import { JsonLd } from '@/components/common/JsonLd';
import { buildOrganization, buildWebSite } from '@/lib/seo/json-ld';

export default function HomePage() {
  return (
    <>
      <JsonLd data={[buildOrganization(), buildWebSite()]} />
      <Hero />
      <ServiceCards />
      <AboutTeaser />
      <FeaturedProjects />
      <Testimonials />
      <CtaSection />
    </>
  );
}
