import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site-config';

/**
 * robots.txt. Open to all crawlers; explicitly welcomes AI crawlers with a
 * small crawl delay (mirrors the wedy-consumer-web approach).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: 'GPTBot', allow: '/', crawlDelay: 2 },
      { userAgent: 'ClaudeBot', allow: '/', crawlDelay: 1 },
      { userAgent: 'PerplexityBot', allow: '/', crawlDelay: 1 },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl(),
  };
}
