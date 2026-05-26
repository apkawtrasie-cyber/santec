import type { MetadataRoute } from 'next';
import { env } from '@/lib/env';
import { GT_CATEGORIES } from '@/lib/gebaeudetechnik-data';

/** Sitemap pojawia się tylko, gdy indeksowanie jest włączone. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!env.allowIndexing) return [];

  const base = env.siteUrl.replace(/\/$/, '');
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/sanierung`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/gebaeudetechnik`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = GT_CATEGORIES.map((c) => ({
    url: `${base}/gebaeudetechnik/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages];
}
