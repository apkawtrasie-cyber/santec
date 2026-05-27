'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useI18n } from '@/i18n/I18nProvider';

export function Faq() {
  const { t } = useI18n();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-bg-soft py-14 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
            <span className="h-px w-8 bg-white/40" /> {t.faq.eyebrow}
            <span className="h-px w-8 bg-white/40" />
          </span>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
            {t.faq.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:mt-5 sm:text-base">
            {t.faq.text}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {t.faq.groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-green">
                {group.title}
              </h3>
              <ul className="overflow-hidden rounded-xl border border-white/10 bg-bg">
                {group.items.map((item, idx) => {
                  const id = `${group.title}-${idx}`;
                  const open = openId === id;
                  return (
                    <li key={id} className="border-b border-white/10 last:border-0">
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/5"
                        aria-expanded={open}
                      >
                        <span className="text-sm font-semibold text-white sm:text-base">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={clsx(
                            'h-5 w-5 shrink-0 text-white/60 transition-transform',
                            open && 'rotate-180',
                          )}
                        />
                      </button>
                      <div
                        className={clsx(
                          'overflow-hidden transition-[max-height] duration-300',
                          open ? 'max-h-96' : 'max-h-0',
                        )}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-white/70">
                          {item.a}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
