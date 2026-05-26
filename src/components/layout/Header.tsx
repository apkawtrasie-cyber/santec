'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import clsx from 'clsx';
import { useI18n } from '@/i18n/I18nProvider';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { company } from '@/lib/env';

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

  const subLinks = [
    { href: '/sanierung', label: 'Asbest- & Schadstoffsanierung' },
    { href: '/gebaeudetechnik', label: 'Gebäudetechnik – Übersicht' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href="#home" className="shrink-0" onClick={() => setOpen(false)}>
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
            <a href={`tel:+417978773477`}>
              <Button variant="ghost" size="md" withArrow={false}>
                {t.nav.anfrage}
              </Button>
            </a>
          </div>

          <button
            className="relative z-[60] lg:hidden text-white"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-50 flex flex-col bg-bg transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        {/* logo top-left */}
        <div className="flex items-center px-5 pt-5">
          <Logo />
        </div>

        {/* centered nav */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold uppercase tracking-widest text-white/90 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}

          <div className="my-2 h-px w-20 bg-white/20" />

          {subLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-wider text-white/50 transition hover:text-white/80"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* bottom bar */}
        <div className="flex flex-col items-center gap-4 px-8 pb-10">
          <LanguageSwitcher variant="menu" />
          <a
            href={`tel:${company.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
          <a href="tel:+417978773477" className="w-full max-w-xs">
            <Button variant="ghost" size="lg" withArrow={false} className="w-full">
              {t.nav.anfrage}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
