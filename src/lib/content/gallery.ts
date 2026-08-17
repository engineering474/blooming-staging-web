import type { GalleryCategory } from '@/interfaces/content';
import { galleryCategories } from '@/content/gallery';

/**
 * Content accessor for the gallery — the single seam between the site and
 * wherever gallery content lives. Pages and components call these functions
 * instead of importing `@/content/gallery` directly, so the source can change
 * without touching a single component.
 *
 * Today it returns the static array from `src/content/gallery.ts`.
 *
 * Migrating to a CMS (e.g. Sanity) means rewriting only this file — the shape
 * it returns (`GalleryCategory[]`) stays the same:
 *
 *   export async function getGalleryCategories(): Promise<GalleryCategory[]> {
 *     return sanityClient.fetch(groq`
 *       *[_type == "galleryCategory"] | order(order asc) {
 *         "id": slug.current, title,
 *         albums[]{ "id": slug.current, label,
 *           images[]{ "src": asset->url, label, desc, alt } }
 *       }
 *     `)
 *   }
 *
 * The functions are async on purpose: callers already `await` them, so swapping
 * a static array for a network fetch needs no changes at the call sites.
 */
export async function getGalleryCategories(): Promise<GalleryCategory[]> {
  return galleryCategories;
}

/** A single category by its stable id, e.g. "staging". */
export async function getGalleryCategory(id: string): Promise<GalleryCategory | undefined> {
  const categories = await getGalleryCategories();
  return categories.find((category) => category.id === id);
}
