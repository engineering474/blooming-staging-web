'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getPageTheme } from '@/lib/page-theme';
import { primaryNav, primaryCta } from '@/lib/navigation';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/button';

/**
 * Site header. On overlay routes (home, detail pages with full-bleed heros) it
 * floats transparently over the hero and switches to a solid cream bar on scroll.
 * On all other routes it is a solid cream bar from the top.
 */
export function Navbar() {
  const pathname = usePathname();
  const { header } = getPageTheme(pathname);
  const isOverlayRoute = header === 'overlay';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isOverlayRoute) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOverlayRoute]);

  const closeMenu = () => setMenuOpen(false);

  const solid = !isOverlayRoute || scrolled;
  const tone: 'dark' | 'light' = solid ? 'dark' : 'light';

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solid
          ? 'border-b border-border bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Logo tone={tone} compact className="items-start" />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {primaryNav.slice(1).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors',
                    tone === 'light'
                      ? 'text-cream/90 hover:text-cream'
                      : 'text-charcoal/80 hover:text-charcoal',
                    active && 'font-medium',
                    active && (tone === 'light' ? 'text-cream' : 'text-gold'),
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            variant={tone === 'light' ? 'light' : 'gold'}
            className="hidden sm:inline-flex"
          >
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-md lg:hidden',
              tone === 'light' ? 'text-cream' : 'text-charcoal',
            )}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-border bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4 sm:px-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block border-b border-border/60 py-3 text-base text-charcoal/90"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button asChild variant="gold" className="w-full">
                <Link href={primaryCta.href} onClick={closeMenu}>
                  {primaryCta.label}
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
