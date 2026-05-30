/**
 * Centralny dostęp do zmiennych środowiskowych.
 * Nigdy nie czytaj `process.env.*` bezpośrednio z komponentów – używaj tych funkcji.
 * Dzięki temu jednym przełącznikiem (np. `NEXT_PUBLIC_ALLOW_INDEXING`) sterujemy całą aplikacją.
 */

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://santecgroup.ch',
  allowIndexing:
    (process.env.NEXT_PUBLIC_ALLOW_INDEXING ?? 'false').toLowerCase() === 'true',
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '',
} as const;

export const company = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? 'Santec Group GmbH',
  street: process.env.NEXT_PUBLIC_COMPANY_STREET ?? 'Alt-Ferrachstrasse 33b',
  zip: process.env.NEXT_PUBLIC_COMPANY_ZIP ?? '8630',
  city: process.env.NEXT_PUBLIC_COMPANY_CITY ?? 'Rüti ZH',
  country: process.env.NEXT_PUBLIC_COMPANY_COUNTRY ?? 'CH',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? '+41 79 787 34 77',
  phoneSecondary: process.env.NEXT_PUBLIC_COMPANY_PHONE_2 ?? '+41 76 630 84 84',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? 'Info@santecgroup.ch',
} as const;

/** Sekrety – tylko po stronie serwera. */
export const serverEnv = {
  mailApiKey: process.env.MAIL_PROVIDER_API_KEY ?? '',
  mailFrom: process.env.MAIL_FROM ?? '',
  mailTo: process.env.MAIL_TO ?? '',
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY ?? '',
} as const;
