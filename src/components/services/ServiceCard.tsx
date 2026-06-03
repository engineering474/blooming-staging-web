import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlurImage } from '@/components/common/BlurImage';
import { NEUTRAL_BLUR } from '@/lib/images';
import type { Service } from '@/interfaces/content';

interface ServiceCardProps {
  service: Service;
}

/** Reusable service card — used on the homepage and the services index. */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-cream shadow-sm ring-1 ring-border transition-all hover:shadow-md hover:ring-gold/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <BlurImage
          src={service.image}
          blurDataURL={NEUTRAL_BLUR}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl">{service.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
