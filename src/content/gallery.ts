import type { GalleryCategory } from '@/interfaces/content';

/**
 * Gallery is organized into categories → albums → images. Each album is a tile
 * that opens a carousel of its images; every image has a `src`, a `label`
 * (shown as the carousel caption) and an optional `desc`.
 *
 * Images live under /public/images/gallery. Titles are placeholders for now and
 * `desc` is left empty — fill in real per-image copy later.
 *
 * CMS-ready: this shape maps 1:1 to a Sanity schema, so migrating means swapping
 * this static array for a GROQ query that returns the same `GalleryCategory[]` —
 * components and pages stay untouched.
 *   galleryCategory (document): { title, slug -> id, albums[] }
 *   album (object):             { label, slug -> id, images[] }
 *   image (object):             { asset -> src (via urlFor), label, desc, alt }
 */
const DIR = '/images/gallery/interior_design';
const VACANT_DIR = '/images/gallery/vacant_stagging';
const OCCUPIED_DIR = '/images/gallery/occupied_stagging';

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    albums: [
      {
        id: 'living-room',
        label: 'Living Room',
        images: [
          { src: `${DIR}/living_room/1.avif`, label: 'Sunlit Corner', desc: '' },
          { src: `${DIR}/living_room/2.avif`, label: 'Layered Neutrals', desc: '' },
          { src: `${DIR}/living_room/3.avif`, label: 'Warm Minimal', desc: '' },
          { src: `${DIR}/living_room/4.avif`, label: 'Quiet Luxury', desc: '' },
          { src: `${DIR}/living_room/5.avif`, label: 'Natural Light', desc: '' },
          { src: `${DIR}/living_room/6.avif`, label: 'Curated Details', desc: '' },
          { src: `${DIR}/living_room/7.avif`, label: 'Soft Textures', desc: '' },
          { src: `${DIR}/living_room/8.avif`, label: 'Elegant Simplicity', desc: '' },
          { src: `${DIR}/living_room/9.avif`, label: 'Refined Comfort', desc: '' },
          { src: `${DIR}/image1.avif`, label: 'Timeless Palette', desc: '' },
          { src: `${DIR}/image2.avif`, label: 'Light & Airy', desc: '' },
        ],
      },
      {
        id: 'bathroom',
        label: 'Bathroom',
        images: [
          { src: `${DIR}/bathroom1.avif`, label: 'Spa Calm', desc: '' },
          { src: `${DIR}/bathroom2.avif`, label: 'Soft Textures', desc: '' },
        ],
      },
      {
        id: 'kitchen',
        label: 'Kitchen',
        images: [
          { src: `${DIR}/kitchen1.avif`, label: 'Modern Lines', desc: '' },
          { src: `${DIR}/kitchen2.avif`, label: 'Bright & Open', desc: '' },
        ],
      },
      {
        id: 'bedroom',
        label: 'Bedroom',
        images: [{ src: `${DIR}/bedroom1.avif`, label: 'Cozy Retreat', desc: '' }],
      },
      {
        id: 'dining-room',
        label: 'Dining Room',
        images: [{ src: `${DIR}/dinning_room1.avif`, label: 'Golden Hour', desc: '' }],
      },
      {
        id: 'office',
        label: 'Office',
        images: [{ src: `${DIR}/office1.avif`, label: 'Custom Built Shelf', desc: '' }],
      },
    ],
  },
  {
    id: 'vacant-staging',
    title: 'Vacant Staging',
    albums: [
      {
        id: 'central-park',
        label: 'Central Park',
        images: [{ src: `${VACANT_DIR}/central_park1.avif`, label: 'Central Park', desc: '' }],
      },
      {
        id: 'aurora',
        label: 'Aurora',
        images: [{ src: `${VACANT_DIR}/aurora1.avif`, label: 'Aurora', desc: '' }],
      },
      {
        id: 'loveland',
        label: 'Loveland',
        images: [{ src: `${VACANT_DIR}/loveland1.avif`, label: 'Loveland', desc: '' }],
      },
      {
        id: 'denver',
        label: 'Denver',
        images: [{ src: `${VACANT_DIR}/denver.avif`, label: 'Denver', desc: '' }],
      },
      {
        id: 'englewood',
        label: 'Englewood',
        images: [{ src: `${VACANT_DIR}/englewood1.avif`, label: 'Englewood', desc: '' }],
      },
      {
        id: 'castle-rock',
        label: 'Castle Rock',
        images: [{ src: `${VACANT_DIR}/castle_rock.avif`, label: 'Castle Rock', desc: '' }],
      },
      {
        id: 'lafayette',
        label: 'Lafayette',
        images: [{ src: `${VACANT_DIR}/laffayette.avif`, label: 'Lafayette', desc: '' }],
      },
      {
        id: 'morrison',
        label: 'Morrison',
        images: [{ src: `${VACANT_DIR}/morrison1.avif`, label: 'Morrison', desc: '' }],
      },
      {
        id: 'parker',
        label: 'Parker',
        images: [{ src: `${VACANT_DIR}/parker.avif`, label: 'Parker', desc: '' }],
      },
    ],
  },
  {
    id: 'occupied-staging',
    title: 'Occupied Staging',
    albums: [
      {
        id: 'central-park',
        label: 'Central Park',
        images: [{ src: `${OCCUPIED_DIR}/central_park1.avif`, label: 'Central Park', desc: '' }],
      },
      {
        id: 'denver',
        label: 'Denver',
        images: [{ src: `${OCCUPIED_DIR}/denver1.avif`, label: 'Denver', desc: '' }],
      },
      {
        id: 'downtown-denver',
        label: 'Downtown Denver',
        images: [{ src: `${OCCUPIED_DIR}/downtown_denver1.avif`, label: 'Downtown Denver', desc: '' }],
      },
      {
        id: 'englewood',
        label: 'Englewood',
        images: [{ src: `${OCCUPIED_DIR}/englewood1.avif`, label: 'Englewood', desc: '' }],
      },
    ],
  },
];
