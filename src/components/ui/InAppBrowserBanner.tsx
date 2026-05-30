'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

/**
 * Wykrywa WhatsApp / Facebook / Instagram / TikTok in-app browser
 * (ograniczone WebView gdzie cz\u0119\u015b\u0107 JS nie dzia\u0142a poprawnie)
 * i proponuje otwarcie strony w prawdziwej przegl\u0105darce.
 */
function detectInAppBrowser(): string | null {
  if (typeof navigator === 'undefined') return null;
  const ua = navigator.userAgent || '';
  if (/WhatsApp/i.test(ua)) return 'WhatsApp';
  if (/FBAN|FBAV|FB_IAB|FBIOS/i.test(ua)) return 'Facebook';
  if (/Instagram/i.test(ua)) return 'Instagram';
  if (/Line\//i.test(ua)) return 'LINE';
  if (/MicroMessenger/i.test(ua)) return 'WeChat';
  if (/musical_ly|TikTok/i.test(ua)) return 'TikTok';
  return null;
}

const DISMISS_KEY = 'inapp-banner-dismissed';

export function InAppBrowserBanner() {
  const [browser, setBrowser] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const b = detectInAppBrowser();
    if (b && typeof window !== 'undefined') {
      const wasDismissed = sessionStorage.getItem(DISMISS_KEY) === '1';
      setBrowser(b);
      setDismissed(wasDismissed);
    }
  }, []);

  if (!browser || dismissed) return null;

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, '1');
    setDismissed(true);
  }

  function openInBrowser() {
    const url = window.location.href;
    const isAndroid = /android/i.test(navigator.userAgent);
    if (isAndroid) {
      // Android: intent:// otwiera w domy\u015blnej przegl\u0105darce
      window.location.href = `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
    } else {
      // iOS: skopiuj link \u2014 user musi wklei\u0107 w Safari
      void navigator.clipboard?.writeText(url);
      alert('Link wurde kopiert. \u00d6ffnen Sie Safari und f\u00fcgen Sie ihn in die Adresszeile ein.');
    }
  }

  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-brand-green text-bg shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 text-sm">
        <ExternalLink className="h-5 w-5 shrink-0" />
        <div className="flex-1">
          <p className="font-semibold">F\u00fcr beste Erfahrung im Browser \u00f6ffnen</p>
          <p className="text-xs opacity-80">
            Sie surfen im {browser}-Browser. Einige Funktionen k\u00f6nnen eingeschr\u00e4nkt sein.
          </p>
        </div>
        <button
          onClick={openInBrowser}
          className="shrink-0 rounded bg-bg px-3 py-1.5 text-xs font-bold text-brand-green transition hover:brightness-110"
        >
          \u00d6ffnen
        </button>
        <button
          onClick={dismiss}
          aria-label="Schliessen"
          className="shrink-0 rounded p-1 transition hover:bg-bg/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
