'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { AlbumCard } from '@/components/gallery/AlbumCard';
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox';
import type { GalleryAlbum, GalleryCategory } from '@/interfaces/content';

interface AlbumGalleryProps {
  categories: GalleryCategory[];
}

/**
 * Categorized album gallery. Each category renders a titled section with a grid
 * of album tiles; clicking a tile opens a shadcn carousel lightbox of that
 * album's images. The page stays a server component — only this island is client.
 */
export function AlbumGallery({ categories }: AlbumGalleryProps) {
  const [openAlbum, setOpenAlbum] = useState<GalleryAlbum | null>(null);

  return (
    <>
      <div className="flex flex-col gap-20 sm:gap-28">
        {categories.map((category) => (
          <section key={category.id} aria-label={category.title}>
            <SectionHeading as="h2" align="left" title={category.title} className="mb-10" />

            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {category.albums.map((album) => (
                <AlbumCard key={album.id} album={album} onOpen={() => setOpenAlbum(album)} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <GalleryLightbox album={openAlbum} onClose={() => setOpenAlbum(null)} />
    </>
  );
}
