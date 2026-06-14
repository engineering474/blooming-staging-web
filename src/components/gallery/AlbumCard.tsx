import { BlurImage } from '@/components/common/BlurImage';
import { NEUTRAL_BLUR } from '@/lib/images';
import type { GalleryAlbum } from '@/interfaces/content';

interface AlbumCardProps {
  album: GalleryAlbum;
  /** Open this album in the lightbox carousel. */
  onOpen: () => void;
}

/**
 * A labeled gallery album tile — a gold label above a cover image that opens the
 * album in a carousel. Mirrors ProjectCard/ServiceCard (cover + hover lift), with
 * the label styled as a brand eyebrow.
 */
export function AlbumCard({ album, onOpen }: AlbumCardProps) {
  const cover = album.images[0];
  const count = album.images.length;

  return (
    <div className="flex flex-col gap-3">
      <span className="tracking-brand text-center text-xs font-medium uppercase text-gold">
        {album.label}
      </span>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${album.label} gallery (${count} photo${count > 1 ? 's' : ''})`}
        className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm ring-1 ring-border transition-all hover:shadow-md hover:ring-gold/40"
      >
        <BlurImage
          src={cover.src}
          blurDataURL={NEUTRAL_BLUR}
          alt={cover.alt ?? cover.label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {count > 1 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-charcoal/70 px-2.5 py-1 text-[0.65rem] font-medium uppercase text-cream backdrop-blur-sm">
            {count} photos
          </span>
        )}
      </button>
    </div>
  );
}
