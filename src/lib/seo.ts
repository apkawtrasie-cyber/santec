import { company, env } from './env';

/**
 * Lokalny JSON-LD schema (LocalBusiness).
 * Render za pomocą <JsonLd /> – zob. src/components/seo/JsonLd.tsx
 */
export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${env.siteUrl}#organization`,
    name: company.name,
    url: env.siteUrl,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      postalCode: company.zip,
      addressLocality: company.city,
      addressCountry: company.country,
    },
    areaServed: company.country,
    description:
      'Santec Group – Sanierung (Asbest, Schadstoffe, Rückbau, Entsorgung) und Gebäudetechnik (Heizung, Lüftung, Sanitär, Energielösungen) in der Schweiz.',
  } as const;
}

/** Helper sterujący meta robots. */
export function robotsMeta() {
  return env.allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true };
}
