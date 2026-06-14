'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { BlurImage } from '@/components/common/BlurImage';
import { NEUTRAL_BLUR } from '@/lib/images';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import type { GalleryAlbum } from '@/interfaces/content';

interface GalleryLightboxProps {
  album: GalleryAlbum | null;
  onClose: () => void;
}

/** Ghost-style carousel arrows for the dark overlay (matches ProjectGallery). */
const DARK_ARROW =
  'size-12 bg-transparent text-cream/70 shadow-none ring-0 hover:bg-cream/10 hover:text-cream';

/**
 * Fullscreen lightbox built on the shadcn carousel. Opens to an album's first
 * image and cycles its images with each `label` (and optional `desc`) as the
 * caption. A thumbnail timeline at the bottom tracks and jumps to any image.
 * Closes on Escape or backdrop click; locks body scroll while open.
 */
export function GalleryLightbox({ album, onClose }: GalleryLightboxProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  // Track the active slide from embla (an external store) via its events.
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  // Keep the active thumbnail centered in the strip.
  useEffect(() => {
    const container = thumbsRef.current;
    const thumb = container?.children[current] as HTMLElement | undefined;
    if (!container || !thumb) return;
    container.scrollTo({
      left: thumb.offsetLeft - container.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: 'smooth',
    });
  }, [current]);

  // Lock scroll + close on Escape while open.
  useEffect(() => {
    if (!album) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [album, onClose]);

  if (!album) return null;

  const multiple = album.images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-charcoal/95"
      role="dialog"
      aria-modal="true"
      aria-label={album.label}
      onClick={onClose}
    >
      {/* Header: counter + close */}
      <header
        className="flex shrink-0 items-center justify-between px-5 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="w-9" aria-hidden="true" />
        <span className="tracking-brand text-xs uppercase text-cream/60">
          {multiple ? `${current + 1} / ${album.images.length}` : album.label}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="inline-flex size-9 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
        >
          <X className="size-5" />
        </button>
      </header>

      {/* Image carousel */}
      <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-4 sm:px-12">
        <Carousel
          className="w-full max-w-4xl"
          opts={{ loop: true }}
          setApi={setApi}
          onClick={(e) => e.stopPropagation()}
        >
          <CarouselContent>
            {album.images.map((image, i) => (
              <CarouselItem key={image.src + i}>
                <div className="flex flex-col items-center gap-5">
                  <div className="relative h-[56vh] w-full overflow-hidden rounded-lg">
                    <BlurImage
                      src={image.src}
                      blurDataURL={NEUTRAL_BLUR}
                      alt={image.alt ?? image.label}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-display text-xl text-cream">{image.label}</p>
                    {image.desc && (
                      <p className="mt-1 text-sm leading-relaxed text-cream/70">
                        {image.desc}
                      </p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {multiple && (
            <>
              <CarouselPrevious className={DARK_ARROW} />
              <CarouselNext className={DARK_ARROW} />
            </>
          )}
        </Carousel>
      </div>

      {/* Thumbnail timeline */}
      {multiple && (
        <div className="shrink-0 px-4 pb-6 pt-1" onClick={(e) => e.stopPropagation()}>
          <div
            ref={thumbsRef}
            className="mx-auto flex w-fit max-w-full gap-2 overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {album.images.map((image, i) => (
              <button
                key={image.src + i}
                type="button"
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to ${image.label}`}
                aria-current={i === current}
                className={cn(
                  'relative size-14 shrink-0 overflow-hidden rounded-md transition-all sm:size-16',
                  i === current
                    ? 'ring-2 ring-gold ring-offset-2 ring-offset-charcoal'
                    : 'opacity-40 hover:opacity-75',
                )}
              >
                <BlurImage
                  src={image.src}
                  blurDataURL={NEUTRAL_BLUR}
                  alt={image.alt ?? image.label}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
