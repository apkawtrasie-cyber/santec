/**
 * Konfiguracja języków. Aby dodać nowy język:
 *  1. dopisz kod do `LOCALES`
 *  2. dodaj plik `src/i18n/locales/<kod>.ts`
 *  3. zarejestruj go w `src/i18n/dictionaries.ts`
 */

export const LOCALES = ['de', 'fr', 'it', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'de';

export const LOCALE_LABELS: Record<Locale, string> = {
  de: 'DE',
  fr: 'FR',
  it: 'IT',
  en: 'EN',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  en: 'English',
};
