'use client';

import { Leaf, Snowflake, Droplets, Zap } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

const ICONS = [Leaf, Snowflake, Droplets, Zap];

export function Gebaeudetechnik() {
  const { t } = useI18n();
  return (
    <section
      id="gebaeudetechnik"
      className="relative overflow-hidden bg-brand-green-dark"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark via-brand-green-dark/80 to-brand-green-dark/30" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-20 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-8 bg-white/60" /> {t.gebaeudetechnik.eyebrow}
          </span>
          <h2 className="mt-4 whitespace-pre-line text-3xl font-bold leading-tight text-white md:text-5xl">
            {t.gebaeudetechnik.title}
          </h2>
          <p className="mt-5 max-w-md text-white/80">{t.gebaeudetechnik.text}</p>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {t.gebaeudetechnik.items.map((it, i) => {
              const Icon = ICONS[i] ?? Leaf;
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
            <Button variant="ghost" size="lg">{t.gebaeudetechnik.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
