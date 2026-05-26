'use client';

import { useI18n } from '@/i18n/I18nProvider';

export function UeberUns() {
  const { t } = useI18n();
  return (
    <section id="ueber-uns" className="bg-bg py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <span className="h-px w-8 bg-white/40" /> {t.ueberUns.eyebrow}
          </span>
          <h2 className="mt-4 whitespace-pre-line text-3xl font-bold leading-tight text-white md:text-5xl">
            {t.ueberUns.title}
          </h2>
          <p className="mt-5 max-w-md text-white/70">{t.ueberUns.text}</p>
        </div>

        <div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {t.ueberUns.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-bold text-white">{s.value}</dt>
                <dd className="mt-2 text-[11px] uppercase tracking-wider text-white/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t.ueberUns.badges}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {['ISO 9001', 'SUVA', 'SWISS MADE'].map((b) => (
              <span
                key={b}
                className="rounded border border-white/20 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white/80"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
