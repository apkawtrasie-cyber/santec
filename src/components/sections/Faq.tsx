'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useI18n } from '@/i18n/I18nProvider';

export function Faq() {
  const { t } = useI18n();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
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

        <div className="mt-12 space-y-3">
          {t.faq.groups.map((group) => {
            const groupOpen = openGroup === group.title;
            return (
              <div
                key={group.title}
                className="overflow-hidden rounded-xl border border-brand-green/30 bg-brand-green-dark/20"
              >
                {/* Category header */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenGroup(groupOpen ? null : group.title)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-brand-green/10"
                  aria-expanded={groupOpen}
                >
                  <span className="text-sm font-bold uppercase tracking-wider text-brand-green sm:text-base">
                    {group.title}
                  </span>
                  <ChevronDown
                    className={clsx(
                      'h-5 w-5 shrink-0 text-brand-green transition-transform',
                      groupOpen && 'rotate-180',
                    )}
                  />
                </button>

                {/* Questions list */}
                <div
                  className={clsx(
                    'grid transition-[grid-template-rows] duration-300',
                    groupOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="border-t border-white/10 bg-bg">
                      {group.items.map((item, idx) => {
                        const id = `${group.title}-${idx}`;
                        const open = openId === id;
                        return (
                          <li
                            key={id}
                            className="border-b border-white/10 last:border-0"
                          >
                            <button
                              type="button"
                              onClick={() => setOpenId(open ? null : id)}
                              className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left transition hover:bg-white/5"
                              aria-expanded={open}
                            >
                              <span className="text-sm font-semibold text-white">
                                {item.q}
                              </span>
                              <ChevronDown
                                className={clsx(
                                  'h-4 w-4 shrink-0 text-white/60 transition-transform',
                                  open && 'rotate-180',
                                )}
                              />
                            </button>
                            <div
                              className={clsx(
                                'grid transition-[grid-template-rows] duration-300',
                                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                              )}
                            >
                              <div className="overflow-hidden">
                                <p className="px-5 pb-4 text-sm leading-relaxed text-white/70">
                                  {item.a}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
