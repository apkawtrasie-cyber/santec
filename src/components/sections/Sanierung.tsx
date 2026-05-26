'use client';

import { ShieldAlert, FlaskConical, Hammer, FileText } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

const ICONS = [ShieldAlert, FlaskConical, Hammer, FileText];

export function Sanierung() {
  const { t } = useI18n();
  return (
    <section
      id="sanierung"
      className="relative overflow-hidden bg-brand-red-dark"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 sm:opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red-dark/90 via-brand-red-dark/85 to-brand-red-dark/70 lg:bg-gradient-to-r lg:from-brand-red-dark lg:via-brand-red-dark/80 lg:to-brand-red-dark/30" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 py-14 sm:py-16 md:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
            <span className="h-px w-8 bg-white/60" /> {t.sanierung.eyebrow}
          </span>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
            {t.sanierung.title}
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/80 sm:mt-5 sm:text-base">
            {t.sanierung.text}
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {t.sanierung.items.map((it, i) => {
              const Icon = ICONS[i] ?? ShieldAlert;
              return (
                <li key={it} className="flex flex-col items-start gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
                    {it}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              {t.sanierung.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
