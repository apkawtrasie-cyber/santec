'use client';

import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="home"
      className="relative min-h-[480px] overflow-hidden bg-bg sm:min-h-[540px] lg:min-h-[640px]"
    >
      <Image
        src="/geboudetechjnik.png"
        alt="Santec Group – Gebäudetechnik"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/75 to-bg/50 lg:bg-gradient-to-r lg:from-bg lg:via-bg/85 lg:to-bg/20" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:py-16 md:px-8 lg:py-28">
        <div className="max-w-lg">
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
      </div>
    </section>
  );
}
