import type { MetadataRoute } from 'next';
import { env } from '@/lib/env';

/** Sitemap pojawia się tylko, gdy indeksowanie jest włączone. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!env.allowIndexing) return [];
  return [
    {
      url: env.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
