'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/gallery/ProjectCard';
import { cn } from '@/lib/utils';
import type { Project } from '@/interfaces/content';

interface Filter {
  slug: string;
  label: string;
}

interface GalleryGridProps {
  projects: Project[];
  filters: Filter[];
}

/**
 * Client island: filterable portfolio grid. The page stays a server component
 * (for SEO + JSON-LD); only the interactive filtering runs on the client.
 */
export function GalleryGrid({ projects, filters }: GalleryGridProps) {
  const [active, setActive] = useState<string>('all');
  const visible =
    active === 'all' ? projects : projects.filter((p) => p.serviceSlug === active);

  const allFilters: Filter[] = [{ slug: 'all', label: 'All Projects' }, ...filters];

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {allFilters.map((filter) => {
          const isActive = active === filter.slug;
          return (
            <button
              key={filter.slug}
              type="button"
              onClick={() => setActive(filter.slug)}
              className={cn(
                'rounded-full border px-5 py-2 text-sm tracking-wide transition-colors',
                isActive
                  ? 'border-charcoal bg-charcoal text-cream'
                  : 'border-charcoal/20 text-charcoal/70 hover:border-charcoal/50',
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-muted-foreground">
          No projects in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
