import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlurImage } from '@/components/common/BlurImage';
import { NEUTRAL_BLUR } from '@/lib/images';
import type { Project } from '@/interfaces/content';

interface ProjectCardProps {
  project: Project;
}

/** Reusable portfolio card — used on the homepage and the gallery index. */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/gallery/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-cream shadow-sm ring-1 ring-border transition-all hover:shadow-md hover:ring-gold/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <BlurImage
          src={project.cover}
          blurDataURL={NEUTRAL_BLUR}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="tracking-brand text-[0.65rem] uppercase text-gold">
          {project.location}
        </span>
        <h3 className="mt-2 font-display text-xl">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 transition-colors group-hover:text-gold">
          View project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
