import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { I18nProvider } from '@/i18n/I18nProvider';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildLocalBusinessJsonLd, robotsMeta } from '@/lib/seo';
import { env } from '@/lib/env';
import { DEFAULT_LOCALE } from '@/i18n/config';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: 'Santec Group – Sanierung & Gebäudetechnik',
    template: '%s | Santec Group',
  },
  description:
    'Santec Group – Professionelle Sanierung und zukunftsorientierte Gebäudetechnik. Sicher. Sauber. Nachhaltig.',
  robots: robotsMeta(),
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: env.siteUrl,
    siteName: 'Santec Group',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0F0E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={DEFAULT_LOCALE} className={inter.variable}>
      <body className="font-sans antialiased">
        <I18nProvider>
          {children}
          <CookieBanner />
        </I18nProvider>
        <JsonLd data={buildLocalBusinessJsonLd()} />
      </body>
    </html>
  );
}
