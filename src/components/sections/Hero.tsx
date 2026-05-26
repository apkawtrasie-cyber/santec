'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bg"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h1 className="whitespace-pre-line text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#sanierung">
              <Button variant="red" size="lg">{t.hero.ctaSanierung}</Button>
            </a>
            <a href="#gebaeudetechnik">
              <Button variant="green" size="lg">{t.hero.ctaGebaeudetechnik}</Button>
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white/5">
          {/* Placeholder building image. Wymień w produkcji na własne zdjęcie. */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
