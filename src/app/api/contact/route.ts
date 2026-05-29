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
      recaptchaToken: string;
    }>;

    const name = (body.name ?? '').toString().trim();
    const email = (body.email ?? '').toString().trim();
    const message = (body.message ?? '').toString().trim();
    const recaptchaToken = (body.recaptchaToken ?? '').toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    if (serverEnv.recaptchaSecretKey) {
      if (!recaptchaToken) {
        return NextResponse.json({ ok: false, error: 'recaptcha_missing' }, { status: 400 });
      }
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(serverEnv.recaptchaSecretKey)}&response=${encodeURIComponent(recaptchaToken)}`,
      });
      const verifyData = (await verifyRes.json()) as { success: boolean };
      if (!verifyData.success) {
        return NextResponse.json({ ok: false, error: 'recaptcha_failed' }, { status: 400 });
      }
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

    const subject = `[Kontaktformular] ${escapeHtml(name)} – ${escapeHtml(email)}`;
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        <div style="background:#0B0F0E;padding:20px 24px">
          <p style="margin:0;color:#fff;font-size:18px;font-weight:bold">Neue Kontaktanfrage</p>
          <p style="margin:4px 0 0;color:#9ca3af;font-size:13px">santecgroup.ch – Kontaktformular</p>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr>
              <td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:bold;font-size:13px;width:110px;color:#374151">Name</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;color:#111827">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:bold;font-size:13px;color:#374151">E-Mail</td>
              <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px">
                <a href="mailto:${escapeHtml(email)}" style="color:#16a34a;text-decoration:none">${escapeHtml(email)}</a>
              </td>
            </tr>
          </table>
          <p style="margin:0 0 8px;font-weight:bold;font-size:13px;color:#374151;text-transform:uppercase;letter-spacing:.05em">Nachricht</p>
          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:16px;font-size:14px;line-height:1.7;color:#111827;white-space:pre-wrap">${escapeHtml(message)}</div>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0" />
          <p style="margin:0;font-size:12px;color:#9ca3af">
            Auf diese E-Mail antworten, um direkt mit ${escapeHtml(name)} Kontakt aufzunehmen.
          </p>
        </div>
      </div>
    `;
    const text = `Neue Kontaktanfrage – santecgroup.ch\n\nName:   ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`;

    // 1. Mail do admina
    const adminRes = await fetch('https://api.resend.com/emails', {
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

    const adminBody = await adminRes.text().catch(() => '');
    // eslint-disable-next-line no-console
    console.log('[contact] resend status:', adminRes.status, 'body:', adminBody);

    if (!adminRes.ok) {
      // eslint-disable-next-line no-console
      console.error('[contact] resend admin failed:', adminRes.status, adminBody);
      return NextResponse.json({ ok: false, error: 'mail_failed', detail: adminBody.slice(0, 200) }, { status: 502 });
    }

    // 2. Auto-reply do nadawcy (best-effort)
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${serverEnv.mailApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Santec Group <onboarding@resend.dev>',
          to: [email],
          subject: 'Vielen Dank für Ihre Anfrage – Santec Group',
          html: `
            <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
              <h2 style="margin:0 0 16px;color:#0B0F0E">Vielen Dank für Ihre Anfrage</h2>
              <p style="margin:0 0 16px">Hallo ${escapeHtml(name)},</p>
              <p style="margin:0 0 16px">
                wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.
              </p>
              <p style="margin:0 0 16px">
                Mit freundlichen Grüßen<br/>
                <strong>Santec Group GmbH</strong>
              </p>
              <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
              <p style="font-size:12px;color:#666;margin:0">
                Dies ist eine automatische Antwort. Bitte antworten Sie nicht auf diese E-Mail.
              </p>
            </div>
          `,
          text: `Hallo ${name},\n\nwir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.\n\nMit freundlichen Grüßen\nSantec Group GmbH`,
        }),
      });
    } catch {
      // auto-reply nie jest krytyczne
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
