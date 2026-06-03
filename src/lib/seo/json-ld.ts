/**
 * JSON-LD schema builders. Each returns a plain object (or array) to be rendered
 * by the <JsonLd> component. Mirrors the wedy-consumer-web approach.
 */
import { siteConfig, absoluteUrl, sameAs } from '@/lib/site-config';
import { testimonials } from '@/content/testimonials';
import type { Service, Project, FAQ } from '@/interfaces/content';

type Schema = Record<string, unknown>;

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

function aggregateRating(): Schema | undefined {
  const rated = testimonials.filter((t) => typeof t.rating === 'number');
  if (rated.length === 0) return undefined;
  const value = rated.reduce((sum, t) => sum + (t.rating ?? 0), 0) / rated.length;
  return {
    '@type': 'AggregateRating',
    ratingValue: value.toFixed(1),
    reviewCount: rated.length,
    bestRating: 5,
    worstRating: 1,
  };
}

/** Organization + LocalBusiness identity (used site-wide / on home). */
export function buildOrganization(): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'HomeAndConstructionBusiness'],
    '@id': ORG_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phones[0],
    slogan: siteConfig.tagline,
    image: absoluteUrl('/og-image.png'),
    logo: absoluteUrl('/og-image.png'),
    founder: siteConfig.founders.map((name) => ({ '@type': 'Person', name })),
    areaServed: siteConfig.areaServed.map((name) => ({ '@type': 'Place', name })),
    address: {
      '@type': 'PostalAddress',
      addressRegion: siteConfig.region,
      addressCountry: 'US',
    },
    sameAs,
    aggregateRating: aggregateRating(),
  };
}

/** WebSite schema (home). */
export function buildWebSite(): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

/** BreadcrumbList from an ordered list of {name, path} crumbs. */
export function buildBreadcrumb(items: { name: string; path: string }[]): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage from a list of Q&A. */
export function buildFaqPage(faqs: FAQ[]): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** Service schema for a service detail page. */
export function buildService(service: Service): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.summary,
    serviceType: service.name,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: { '@id': ORG_ID },
    areaServed: siteConfig.areaServed.map((name) => ({ '@type': 'Place', name })),
  };
}

/** ImageGallery / CreativeWork schema for a portfolio project. */
export function buildImageGallery(project: Project): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/gallery/${project.slug}`),
    datePublished: project.date,
    locationCreated: { '@type': 'Place', name: project.location },
    author: { '@id': ORG_ID },
    image: project.images.map((img) => absoluteUrl(img.src)),
  };
}

/** CollectionPage + ItemList for the gallery index. */
export function buildCollectionPage(
  name: string,
  path: string,
  items: { name: string; path: string; image?: string }[],
): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: absoluteUrl(path),
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: absoluteUrl(item.path),
        name: item.name,
        ...(item.image ? { image: absoluteUrl(item.image) } : {}),
      })),
    },
  };
}
