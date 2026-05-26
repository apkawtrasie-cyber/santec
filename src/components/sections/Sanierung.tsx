'use client';

import { ChevronRight, ShieldAlert, FlaskConical, Hammer, FileText } from 'lucide-react';
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
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red-dark via-brand-red-dark/80 to-brand-red-dark/30" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-20 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-8 bg-white/60" /> {t.sanierung.eyebrow}
          </span>
          <h2 className="mt-4 whitespace-pre-line text-3xl font-bold leading-tight text-white md:text-5xl">
            {t.sanierung.title}
          </h2>
          <p className="mt-5 max-w-md text-white/80">{t.sanierung.text}</p>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {t.sanierung.items.map((it, i) => {
              const Icon = ICONS[i] ?? ShieldAlert;
              return (
                <li
                  key={it}
                  className="flex flex-col items-start gap-2 lg:items-start"
                >
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

          <div className="mt-8 lg:hidden">
            <MobileList items={t.sanierung.items} />
          </div>

          <div className="mt-8">
            <Button variant="ghost" size="lg">{t.sanierung.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-white/10 rounded-md border border-white/10">
      {items.map((it) => (
        <li key={it} className="flex items-center justify-between px-4 py-3 text-sm text-white">
          <span className="uppercase tracking-wider">{it}</span>
          <ChevronRight className="h-4 w-4 text-white/60" />
        </li>
      ))}
    </ul>
  );
}
