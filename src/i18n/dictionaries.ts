import type { Locale } from './config';
import type { Dictionary } from './types';
import de from './locales/de';
import fr from './locales/fr';
import it from './locales/it';
import en from './locales/en';

export const dictionaries: Record<Locale, Dictionary> = { de, fr, it, en };
