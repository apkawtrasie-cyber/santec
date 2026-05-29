import { NextResponse } from 'next/server';
import { serverEnv, company } from '@/lib/env';

export const runtime = 'nodejs';

/**
 * Endpoint dla formularza kontaktowego.
 *
 * Bez ustawionego `MAIL_PROVIDER_API_KEY` działa w trybie LOG-ONLY:
 * waliduje dane i loguje je do konsoli serwera (bezpieczne dla dev/lokal).
 *
 * Aby podpiąć realnego dostawcę (np. Resend), uzupełnij sekcję `// TODO`
 * używając zmiennych z `serverEnv`. Sekrety czytamy WYŁĄCZNIE tutaj,
 * NIGDY w komponentach client-side.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<{
      name: string;
      email: string;
      message: string;
    }>;

    const name = (body.name ?? '').toString().trim();
    const email = (body.email ?? '').toString().trim();
    const message = (body.message ?? '').toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    if (!serverEnv.mailApiKey) {
      // eslint-disable-next-line no-console
      console.info('[contact] log-only mode (no MAIL_PROVIDER_API_KEY):', {
        name,
        email,
        length: message.length,
      });
      return NextResponse.json({ ok: true, mode: 'log-only' });
    }

    const to = serverEnv.mailTo || company.email;
    const from = serverEnv.mailFrom || 'Santec Website <onboarding@resend.dev>';

    const subject = `Neue Anfrage von ${name}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
        <h2 style="margin:0 0 16px;color:#0B0F0E">Neue Kontaktanfrage</h2>
        <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>E-Mail:</strong>
          <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
        <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
        <p style="font-size:12px;color:#666;margin:0">
          Diese Nachricht wurde über das Kontaktformular auf santecgroup.ch gesendet.
        </p>
      </div>
    `;
    const text = `Neue Kontaktanfrage\n\nName: ${name}\nE-Mail: ${email}\n\n${message}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${serverEnv.mailApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      // eslint-disable-next-line no-console
      console.error('[contact] resend failed:', res.status, errText);
      return NextResponse.json({ ok: false, error: 'mail_failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
