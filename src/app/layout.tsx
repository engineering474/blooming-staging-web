import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat, EB_Garamond } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import { Analytics } from '@/components/common/Analytics';
import './globals.css';

// Heimat Display (paid) → Cormorant Garamond. Elegant high-contrast display serif.
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

// Proxima Nova (paid) → Montserrat. Clean geometric sans for body/UI.
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

// FreightBig Pro Italic (paid) → EB Garamond. Classic serif for italic accents.
const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Colorado Home Staging & Interior Design`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: siteConfig.founders.map((name) => ({ name })),
  keywords: [
    'home staging',
    'Colorado home staging',
    'Denver home staging',
    'interior design',
    'color consultation',
    'real estate staging',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Colorado Home Staging & Interior Design`,
    description: siteConfig.description,
    url: '/',
    locale: 'en_US',
    // og:image is provided by the app/opengraph-image.tsx file convention.
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Colorado Home Staging & Interior Design`,
    description: siteConfig.description,
    // twitter:image is provided by the app/twitter-image.tsx file convention.
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
