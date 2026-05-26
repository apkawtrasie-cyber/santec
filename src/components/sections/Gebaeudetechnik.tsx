'use client';

import Link from 'next/link';
import { Snowflake, Droplets, Zap, Sun, ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

const ICONS = [Snowflake, Droplets, Zap, Sun];
const SLUGS = ['kaelteanlagen', 'sanitaer', 'elektro', 'photovoltaik'];

export function Gebaeudetechnik() {
  const { t } = useI18n();
  return (
    <section id="gebaeudetechnik" className="relative overflow-hidden bg-brand-green-dark">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/95 to-brand-green-dark/80" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:py-16 md:px-8 lg:py-24">
        <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
          <span className="h-px w-8 bg-white/60" /> {t.gebaeudetechnik.eyebrow}
        </span>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="whitespace-pre-line text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {t.gebaeudetechnik.title}
          </h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-white/80 sm:mt-5 sm:text-base">
          {t.gebaeudetechnik.text}
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {t.gebaeudetechnik.items.map((item, i) => {
            const Icon = ICONS[i] ?? Snowflake;
            const slug = SLUGS[i];
            return (
              <li
                key={slug}
                className="flex flex-col gap-4 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/15">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/70">{item.desc}</p>
                </div>
                <Link href={`/gebaeudetechnik/${slug}`} className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white">
                  {t.gebaeudetechnik.infoBtn}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10">
          <a href="#kontakt">
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              {t.gebaeudetechnik.cta}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
