import type { GalleryAlbum } from '@/interfaces/content';

/**
 * Interior design albums, grouped by room. Images live under
 * /public/images/gallery/interior_design/.
 *
 * Same shape as the staging albums — see ./staging.ts for the CMS mapping.
 */
const DIR = '/images/gallery/interior_design';

export const interiorDesignAlbums: GalleryAlbum[] = [
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
];
