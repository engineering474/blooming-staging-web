import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, Tag } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeading } from '@/components/common/SectionHeading';
import { JsonLd } from '@/components/common/JsonLd';
import { ProjectGallery } from '@/components/gallery/ProjectGallery';
import { ProjectCard } from '@/components/gallery/ProjectCard';
import { CtaSection } from '@/components/home/CtaSection';
import { buildBreadcrumb, buildImageGallery } from '@/lib/seo/json-ld';
import { projects, getProjectBySlug, projectSlugs } from '@/content/projects';
import { getServiceBySlug } from '@/content/services';
import { siteConfig } from '@/lib/site-config';
import { formatMonthYear } from '@/lib/format';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.location}`,
    description: project.summary,
    alternates: { canonical: `/gallery/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `/gallery/${project.slug}`,
      images: [{ url: project.cover, alt: project.coverAlt }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const service = getServiceBySlug(project.serviceSlug);
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          buildImageGallery(project),
          buildBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
            { name: project.title, path: `/gallery/${project.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Project"
        title={project.title}
        description={project.summary}
        image={project.cover}
        imageAlt={project.coverAlt}
        align="left"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Gallery', href: '/gallery' },
          { name: project.title },
        ]}
      />

      {/* Meta bar */}
      <section className="border-b border-border bg-cream py-6">
        <Container>
          <dl className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" />
              <dt className="sr-only">Location</dt>
              <dd className="text-charcoal/85">{project.location}</dd>
            </div>
            {service && (
              <div className="flex items-center gap-2">
                <Tag className="size-4 text-gold" />
                <dt className="sr-only">Service</dt>
                <dd>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-charcoal/85 underline-offset-4 hover:text-gold hover:underline"
                  >
                    {service.name}
                  </Link>
                </dd>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-gold" />
              <dt className="sr-only">Completed</dt>
              <dd className="text-charcoal/85">{formatMonthYear(project.date)}</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-24">
        <Container>
          <ProjectGallery images={project.images} />
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-muted py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="More Work" title="Related projects" className="mb-10" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
