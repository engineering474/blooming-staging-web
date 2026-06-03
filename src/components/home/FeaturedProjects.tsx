import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/gallery/ProjectCard';
import { projects } from '@/content/projects';

/** Gallery preview — a few recent projects with a link to the full gallery. */
export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-muted py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Work"
            title="Recent projects"
            description="A look at homes we've staged and designed across Colorado."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
