'use client';

import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';
import { company, env } from '@/lib/env';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Kontakt() {
  const { t } = useI18n();
  const [status, setStatus] = useState<Status>('idle');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (env.recaptchaSiteKey && !recaptchaToken) return;
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: form.get('message'),
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      e.currentTarget.reset();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch {
      setStatus('error');
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  }

  return (
    <section id="kontakt" className="bg-bg py-14 sm:py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="pl-4 lg:pl-8">
          <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
            <span className="h-px w-8 bg-white/40" /> {t.kontakt.eyebrow}
          </span>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
            {t.kontakt.title}
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/70 sm:mt-5 sm:text-base">
            {t.kontakt.text}
          </p>

          <ul className="mt-8 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-green" />
              <span>
                {company.name}
                <br />
                {company.street}
                <br />
                {company.country}-{company.zip} {company.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-green" />
              <a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-green" />
              <a href={`tel:${company.phoneSecondary.replace(/\s+/g, '')}`}>{company.phoneSecondary}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-green" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <Field name="name" label={t.kontakt.form.name} required />
          <Field name="email" label={t.kontakt.form.email} type="email" required />
          <Field name="message" label={t.kontakt.form.message} required textarea />
          {env.recaptchaSiteKey && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={env.recaptchaSiteKey}
              theme="dark"
              onChange={(token) => setRecaptchaToken(token)}
              onExpired={() => setRecaptchaToken(null)}
            />
          )}
          <Button
            type="submit"
            variant="white"
            size="lg"
            disabled={status === 'loading' || (!!env.recaptchaSiteKey && !recaptchaToken)}
            className="w-full sm:w-auto"
          >
            {t.kontakt.form.send}
          </Button>
          {status === 'success' && (
            <p className="text-sm text-brand-green">{t.kontakt.form.success}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-brand-red">{t.kontakt.form.error}</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    'w-full rounded-md border border-white/15 bg-bg-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none';
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-wider text-white/60">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
