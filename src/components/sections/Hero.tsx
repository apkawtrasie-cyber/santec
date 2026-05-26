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
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <h1 className="whitespace-pre-line text-[2rem] font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            {t.hero.subtitle}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#sanierung" className="w-full sm:w-auto">
              <Button variant="red" size="lg" className="w-full sm:w-auto">
                {t.hero.ctaSanierung}
              </Button>
            </a>
            <a href="#gebaeudetechnik" className="w-full sm:w-auto">
              <Button variant="green" size="lg" className="w-full sm:w-auto">
                {t.hero.ctaGebaeudetechnik}
              </Button>
            </a>
          </div>
        </div>

        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-white/5 sm:aspect-[4/3]">
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
