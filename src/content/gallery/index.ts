import type { GalleryCategory } from '@/interfaces/content';
import { stagingAlbums } from './staging';
import { interiorDesignAlbums } from './interior-design';

/**
 * Gallery is organized into categories → albums → images. Each album is a tile
 * that opens a carousel of its images.
 *
 * One file per category, so a category maps 1:1 to a CMS document type and a
 * non-developer only ever opens the file they need. This index just orders the
 * sections on the page.
 *
 * Read this through `getGalleryCategories()` in `@/lib/content/gallery` rather
 * than importing it directly — that's the single seam a CMS migration replaces.
 */
export const galleryCategories: GalleryCategory[] = [
  {
    id: 'staging',
    title: 'Staging',
    albums: stagingAlbums,
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    albums: interiorDesignAlbums,
  },
];
