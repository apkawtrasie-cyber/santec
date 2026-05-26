/**
 * Centralny dostęp do zmiennych środowiskowych.
 * Nigdy nie czytaj `process.env.*` bezpośrednio z komponentów – używaj tych funkcji.
 * Dzięki temu jednym przełącznikiem (np. `NEXT_PUBLIC_ALLOW_INDEXING`) sterujemy całą aplikacją.
 */

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  allowIndexing:
    (process.env.NEXT_PUBLIC_ALLOW_INDEXING ?? 'false').toLowerCase() === 'true',
} as const;

export const company = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? 'Santec Group GmbH',
  street: process.env.NEXT_PUBLIC_COMPANY_STREET ?? 'Alt-Ferrachstrasse 33b',
  zip: process.env.NEXT_PUBLIC_COMPANY_ZIP ?? '8630',
  city: process.env.NEXT_PUBLIC_COMPANY_CITY ?? 'Rüti ZH',
  country: process.env.NEXT_PUBLIC_COMPANY_COUNTRY ?? 'CH',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? '+41 79 787 73 477',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? 'adamzapala79@gmail.com',
} as const;

/** Sekrety – tylko po stronie serwera. */
export const serverEnv = {
  mailApiKey: process.env.MAIL_PROVIDER_API_KEY ?? '',
  mailFrom: process.env.MAIL_FROM ?? '',
  mailTo: process.env.MAIL_TO ?? '',
} as const;
