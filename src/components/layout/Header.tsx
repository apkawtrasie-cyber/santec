'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { useI18n } from '@/i18n/I18nProvider';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#sanierung', label: t.nav.sanierung },
    { href: '#gebaeudetechnik', label: t.nav.gebaeudetechnik },
    { href: '#ueber-uns', label: t.nav.ueberUns },
    { href: '#kontakt', label: t.nav.kontakt },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wide text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Button variant="ghost" size="md" withArrow={false}>
            {t.nav.anfrage}
          </Button>
        </div>

        <button
          className="lg:hidden text-white"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'lg:hidden overflow-hidden border-t border-white/5 bg-bg transition-[max-height] duration-300',
          open ? 'max-h-[80vh]' : 'max-h-0',
        )}
      >
        <div className="flex flex-col gap-5 px-5 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base uppercase tracking-wide text-white/80"
            >
              {l.label}
            </a>
          ))}
          <div className="h-px w-full bg-white/10" />
          <LanguageSwitcher variant="menu" />
          <Button variant="ghost" size="md" withArrow={false}>
            {t.nav.anfrage}
          </Button>
        </div>
      </div>
    </header>
  );
}
