import Image, { type ImageProps, type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

type BlurImageProps = Omit<ImageProps, 'placeholder' | 'blurDataURL'> & {
  /**
   * When the src is a string path (not a static import), Next can't generate a
   * blur automatically — pass a tiny base64 data URL here to still get the blur.
   */
  blurDataURL?: string;
};

/**
 * Drop-in <Image> wrapper that enables the built-in blur-up placeholder.
 *
 * Export-safe: unlike the wedy-consumer-web BlurImage (which fetched a
 * color-matched blur from an /api/blur route), this relies on Next's static
 * `placeholder="blur"`. Statically-imported images get a blurDataURL for free;
 * string-path images can supply one via the `blurDataURL` prop.
 */
export function BlurImage({ className, src, blurDataURL, alt, ...props }: BlurImageProps) {
  const isStaticImport = typeof src === 'object' && src !== null;
  const canBlur = isStaticImport || Boolean(blurDataURL);

  return (
    <Image
      src={src as string | StaticImageData}
      alt={alt}
      className={cn('object-cover', className)}
      {...(canBlur ? { placeholder: 'blur', blurDataURL } : {})}
      {...props}
    />
  );
}
