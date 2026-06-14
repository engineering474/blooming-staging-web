import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Logo } from '@/components/common/Logo';
import { siteConfig } from '@/lib/site-config';
import { primaryNav } from '@/lib/navigation';
import { services } from '@/content/services';

/** Universal site footer: brand, navigation, services, and contact (NAP). */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">
              {siteConfig.tagline}. Home staging and interior design serving{' '}
              {siteConfig.regionName}.
            </p>
            <div className="mt-2 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-charcoal"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-charcoal"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="tracking-brand mb-4 text-xs uppercase text-cream/60">Explore</h2>
            <ul className="flex flex-col gap-3 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="tracking-brand mb-4 text-xs uppercase text-cream/60">Services</h2>
            <ul className="flex flex-col gap-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-cream/80 transition-colors hover:text-cream"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="tracking-brand mb-4 text-xs uppercase text-cream/60">Contact</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-cream"
                >
                  <Mail className="size-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-cream"
                  >
                    <Phone className="size-4 shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. {siteConfig.founders.join(' & ')}. All rights reserved.
          </p>
          <p className="font-accent text-cream/45">
            Brand design by {siteConfig.brandDesignBy}
          </p>
        </div>
      </Container>
    </footer>
  );
}
