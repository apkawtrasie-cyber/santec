'use client';

import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const CONSENT_KEY = 'cookie-consent';

export function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1a1f1e] shadow-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 md:px-8">
        <Cookie className="hidden h-8 w-8 shrink-0 text-white/50 sm:block" />

        <div className="flex-1">
          <p className="text-sm leading-relaxed text-white/80">
            {t.cookies.description}
          </p>
          <div className="mt-2 flex gap-4 text-xs text-white/50">
            <a href="/datenschutz" className="hover:text-white transition">{t.footer.datenschutz}</a>
            <a href="/impressum" className="hover:text-white transition">{t.footer.impressum}</a>
          </div>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded px-5 py-2 text-sm font-medium text-white/70 bg-white/10 transition hover:bg-white/20 hover:text-white"
          >
            {t.cookies.rejectAll}
          </button>
          <button
            onClick={accept}
            className="rounded px-5 py-2 text-sm font-semibold text-bg bg-brand-green transition hover:brightness-110"
          >
            {t.cookies.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
