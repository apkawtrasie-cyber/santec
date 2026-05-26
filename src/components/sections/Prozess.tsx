'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

export function Prozess() {
  const { t } = useI18n();
  return (
    <section id="prozess" className="bg-bg-soft py-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          <span className="h-px w-8 bg-white/40" /> {t.prozess.eyebrow}
        </span>
        <h2 className="mt-4 whitespace-pre-line text-3xl font-bold leading-tight text-white md:text-5xl">
          {t.prozess.title}
        </h2>
        <p className="mt-3 text-white/70">{t.prozess.text}</p>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.prozess.steps.map((s) => (
            <li
              key={s.n}
              className="rounded-lg border border-white/10 bg-bg p-6"
            >
              <span className="text-xs font-semibold tracking-wider text-brand-green">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Button variant="ghost" size="lg">{t.prozess.cta}</Button>
        </div>
      </div>
    </section>
  );
}
