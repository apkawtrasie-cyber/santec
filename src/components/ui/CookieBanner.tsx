'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

const CONSENT_KEY = 'cookie-consent';

const COOKIES = [
  {
    name: '_session',
    purpose: { de: 'Sitzungsverwaltung', en: 'Session management', fr: 'Gestion de session', it: 'Gestione sessione' },
    duration: { de: 'Sitzung', en: 'Session', fr: 'Session', it: 'Sessione' },
  },
  {
    name: '_locale',
    purpose: { de: 'Spracheinstellung speichern', en: 'Save language preference', fr: 'Mémoriser la langue', it: 'Salva lingua' },
    duration: { de: '1 Jahr', en: '1 year', fr: '1 an', it: '1 anno' },
  },
  {
    name: 'cookie-consent',
    purpose: { de: 'Cookie-Einwilligung speichern', en: 'Store cookie consent', fr: 'Mémoriser le consentement', it: 'Salva consenso cookie' },
    duration: { de: '1 Jahr', en: '1 year', fr: '1 an', it: '1 anno' },
  },
] as const;

export function CookieBanner() {
  const { t, locale } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (!saved) setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  }

  function reject() {
    setVisible(false);
  }

  const lang = locale;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-bg shadow-2xl">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-base font-semibold text-white">{t.cookies.title}</h2>
          <p className="text-sm text-white/70 sm:max-w-lg">{t.cookies.description}</p>
        </div>

        <div className="overflow-x-auto rounded-md border border-white/10">
          <table className="w-full text-left text-xs text-white/80">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider text-white/60">
                  {t.cookies.tableHeader.name}
                </th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider text-white/60">
                  {t.cookies.tableHeader.purpose}
                </th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider text-white/60">
                  {t.cookies.tableHeader.duration}
                </th>
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((c) => (
                <tr key={c.name} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-2 font-mono">{c.name}</td>
                  <td className="px-4 py-2">{c.purpose[lang]}</td>
                  <td className="px-4 py-2">{c.duration[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={reject}
            className="rounded-md border border-white/20 px-6 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-white"
          >
            {t.cookies.rejectAll}
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-brand-green px-6 py-2.5 text-sm font-semibold text-bg transition hover:brightness-110"
          >
            {t.cookies.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
