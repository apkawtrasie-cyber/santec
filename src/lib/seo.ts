import { company, env } from './env';

/**
 * Lokalny JSON-LD schema (LocalBusiness).
 * Render za pomocą <JsonLd /> – zob. src/components/seo/JsonLd.tsx
 *
 * Pełny zestaw danych dla Google Knowledge Panel / rich results:
 * - logo + image (pokazują się obok wyniku w Google)
 * - geo (mapy)
 * - openingHours
 * - sameAs (social media – uzupełnij linki gdy będą)
 * - hasOfferCatalog (lista usług)
 */
export function buildLocalBusinessJsonLd() {
  const base = env.siteUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${base}#organization`,
    name: company.name,
    legalName: 'Santec Group GmbH',
    url: base,
    logo: `${base}/santec-group-gmbh.png`,
    image: [`${base}/santec-group-gmbh.png`, `${base}/opengraph-image.png`],
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      postalCode: company.zip,
      addressLocality: company.city,
      addressRegion: 'ZH',
      addressCountry: company.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.2557,
      longitude: 8.8508,
    },
    areaServed: [
      { '@type': 'Country', name: 'Schweiz' },
      { '@type': 'AdministrativeArea', name: 'Zürich' },
      { '@type': 'AdministrativeArea', name: 'St. Gallen' },
      { '@type': 'AdministrativeArea', name: 'Aargau' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: 'CHF',
    description:
      'Santec Group GmbH – Asbest- & Schadstoffsanierung, Rückbau, Entsorgung sowie Gebäudetechnik: Lüftung, Klima, Sanitär, Elektro- & Gebäudeinstallationen, Photovoltaik- & Energiesysteme. Zertifiziert und SUVA-konform. Schweiz.',
    knowsAbout: [
      'Asbestsanierung',
      'Schadstoffsanierung',
      'PCB-Sanierung',
      'KMF-Sanierung',
      'Rückbau',
      'Brandschadensanierung',
      'Lüftung',
      'Klimaanlagen',
      'Sanitärinstallation',
      'Elektroinstallation',
      'Photovoltaik',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dienstleistungen Santec Group',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Asbest- und Schadstoffsanierung',
            url: `${base}/sanierung`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gebäudetechnik',
            url: `${base}/gebaeudetechnik`,
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phone,
      contactType: 'customer service',
      email: company.email,
      availableLanguage: ['de', 'fr', 'it', 'en'],
      areaServed: 'CH',
    },
    sameAs: [],
  } as const;
}

/** Helper sterujący meta robots. */
export function robotsMeta() {
  return env.allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true };
}
