import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/env';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link href="/" className="text-sm text-white/70 hover:text-white transition">
            ← Zurück
          </Link>
          <span className="text-sm font-semibold text-white">Impressum</span>
        </div>
      </header>

      <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <h1 className="mb-10 text-4xl font-bold text-white">Impressum</h1>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">Angaben gemäss Art. 13 DSG</h2>
          <address className="space-y-1 text-sm not-italic text-white/80">
            <p className="font-semibold text-white">{company.name}</p>
            <p>{company.street}</p>
            <p>
              {company.country}-{company.zip} {company.city}
            </p>
          </address>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">Kontakt</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <span className="text-white/50">Telefon:</span>{' '}
              <a
                href={`tel:${company.phone.replace(/\s+/g, '')}`}
                className="hover:text-white transition"
              >
                {company.phone}
              </a>
            </li>
            <li>
              <span className="text-white/50">Telefon 2:</span>{' '}
              <a
                href={`tel:${company.phoneSecondary.replace(/\s+/g, '')}`}
                className="hover:text-white transition"
              >
                {company.phoneSecondary}
              </a>
            </li>
            <li>
              <span className="text-white/50">E-Mail:</span>{' '}
              <a
                href={`mailto:${company.email}`}
                className="hover:text-white transition"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">Haftungsausschluss</h2>
          <p className="text-sm leading-relaxed text-white/70">
            Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
            Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
            welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
            Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
            entstanden sind, werden ausgeschlossen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">Urheberrechte</h2>
          <p className="text-sm leading-relaxed text-white/70">
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien
            auf dieser Website, gehören ausschliesslich{' '}
            <strong className="text-white">{company.name}</strong> oder den speziell genannten
            Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche
            Zustimmung einzuholen.
          </p>
        </section>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {company.name}
        </p>
      </main>
    </>
  );
}
