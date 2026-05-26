import type { MetadataRoute } from 'next';
import { env } from '@/lib/env';

/**
 * Sterowane ENV `NEXT_PUBLIC_ALLOW_INDEXING`.
 *  - false (domyślnie): Disallow: /  – strona NIE jest indeksowana.
 *  - true: Allow: /  – pełne indeksowanie, plus link do sitemap.
 *
 *  Po zmianie wartości w .env.local lub na Vercel zrób redeploy.
 */
export default function robots(): MetadataRoute.Robots {
  if (!env.allowIndexing) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    };
  }
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${env.siteUrl}/sitemap.xml`,
    host: env.siteUrl,
  };
}
