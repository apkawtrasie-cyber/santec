import { NextResponse } from 'next/server';
import { serverEnv } from '@/lib/env';

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
      // Tryb log-only – brak danych wrażliwych.
      // eslint-disable-next-line no-console
      console.info('[contact] log-only mode:', { name, email, length: message.length });
      return NextResponse.json({ ok: true, mode: 'log-only' });
    }

    // TODO: integracja z dostawcą maila (np. Resend / SendGrid).
    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${serverEnv.mailApiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: serverEnv.mailFrom,
    //     to: serverEnv.mailTo,
    //     subject: `Anfrage von ${name}`,
    //     text: `${message}\n\nReply-To: ${email}`,
    //   }),
    // });
    // if (!res.ok) throw new Error('mail_failed');

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
