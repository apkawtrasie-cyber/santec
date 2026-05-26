'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Snowflake, Droplets, Zap, Sun, ChevronRight } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

const ICONS = [Snowflake, Droplets, Zap, Sun];
const SLUGS = ['kaelteanlagen', 'sanitaer', 'elektro', 'photovoltaik'];

export function Gebaeudetechnik() {
  const { t } = useI18n();
  return (
    <section id="gebaeudetechnik" className="relative overflow-hidden bg-brand-green-dark">
      <Image
        src="/klima.santecgroup.png"
        alt=""
        fill
        quality={85}
        sizes="100vw"
        className="object-cover object-right opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/90 via-brand-green-dark/85 to-brand-green-dark/70 lg:bg-gradient-to-r lg:from-brand-green-dark lg:via-brand-green-dark/80 lg:to-brand-green-dark/20" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 py-14 sm:py-16 md:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
            <span className="h-px w-8 bg-white/60" /> {t.gebaeudetechnik.eyebrow}
          </span>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
            {t.gebaeudetechnik.title}
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/80 sm:mt-5 sm:text-base">
            {t.gebaeudetechnik.text}
          </p>

          <ul className="mt-7 overflow-hidden rounded-xl border border-white/20 sm:mt-8">
            {t.gebaeudetechnik.items.map((item, i) => {
              const Icon = ICONS[i] ?? Snowflake;
              const slug = SLUGS[i];
              return (
                <li key={slug} className="border-b border-white/10 last:border-0">
                  <Link
                    href={`/gebaeudetechnik/${slug}`}
                    className="group flex items-center gap-4 px-4 py-3.5 transition hover:bg-white/10"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/30 bg-white/5">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <span className="flex-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                      {item.title}
                    </span>
                    <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white/70" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <Link href="/gebaeudetechnik">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                {t.gebaeudetechnik.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
