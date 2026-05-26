'use client';

import clsx from 'clsx';
import { useI18n } from '@/i18n/I18nProvider';
import { LOCALES, LOCALE_LABELS, LOCALE_NAMES, type Locale } from '@/i18n/config';

interface Props {
  variant?: 'inline' | 'menu';
  className?: string;
}

export function LanguageSwitcher({ variant = 'inline', className }: Props) {
  const { locale, setLocale } = useI18n();

  if (variant === 'menu') {
    return (
      <div className={clsx('flex flex-col gap-2', className)}>
        {LOCALES.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={clsx(
              'text-left text-sm transition-colors',
              l === locale ? 'text-white' : 'text-white/60 hover:text-white',
            )}
          >
            {LOCALE_NAMES[l]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className={clsx('flex items-center gap-1 text-xs font-medium', className)}
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map((l: Locale, i) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => setLocale(l)}
            aria-current={l === locale ? 'true' : undefined}
            className={clsx(
              'px-1.5 py-1 transition-colors',
              l === locale ? 'text-white' : 'text-white/50 hover:text-white',
            )}
          >
            {LOCALE_LABELS[l]}
          </button>
          {i < LOCALES.length - 1 && (
            <span className="text-white/20">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
