import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/env';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link href="/" className="text-sm text-white/70 transition hover:text-white">
            ← Zurück
          </Link>
          <span className="text-sm font-semibold text-white">Datenschutzerklärung</span>
        </div>
      </header>

      <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <h1 className="mb-10 text-4xl font-bold text-white">Datenschutzerklärung</h1>

        {/* 1 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">
            1. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            Die {company.name} legt grossen Wert auf den Schutz Ihrer persönlichen Daten. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften der Schweiz (insbesondere dem Bundesgesetz über den
            Datenschutz, nDSG) sowie dieser Datenschutzerklärung.
          </p>
          <p className="mb-6 text-sm leading-relaxed text-white/70">
            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken
            bestmöglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu
            schützen.
          </p>

          <h3 className="mb-3 text-base font-semibold text-white">Verantwortliche Stelle</h3>
          <address className="mb-2 space-y-1 text-sm not-italic text-white/80">
            <p className="font-semibold text-white">{company.name}</p>
            <p>{company.street}</p>
            <p>
              {company.country}-{company.zip} {company.city}
            </p>
            <p>Schweiz</p>
          </address>
          <ul className="mt-3 space-y-1 text-sm text-white/80">
            <li>
              <span className="text-white/50">Telefon:</span>{' '}
              <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="transition hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>
              <span className="text-white/50">Telefon 2:</span>{' '}
              <a href={`tel:${company.phoneSecondary.replace(/\s+/g, '')}`} className="transition hover:text-white">
                {company.phoneSecondary}
              </a>
            </li>
            <li>
              <span className="text-white/50">E-Mail:</span>{' '}
              <a href={`mailto:${company.email}`} className="transition hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">
            2. Datenerfassung auf unserer Website
          </h2>

          <h3 className="mb-3 text-base font-semibold text-white">Server-Log-Files</h3>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            Der Provider dieser Website (Vercel Inc.) erhebt und speichert automatisch Informationen
            in sogenannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt.
            Dies sind:
          </p>
          <ul className="mb-6 list-inside list-disc space-y-1 text-sm text-white/70">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mb-6 text-sm leading-relaxed text-white/70">
            Diese Daten sind nicht bestimmten Personen zuzuordnen. Eine Zusammenführung dieser
            Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>

          <h3 className="mb-3 text-base font-semibold text-white">Cookies</h3>
          <p className="text-sm leading-relaxed text-white/70">
            Unsere Website verwendet teilweise so genannte Cookies. Cookies richten auf Ihrem
            Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot
            nutzerfreundlicher, effektiver und sicherer zu machen. Die meisten der von uns
            verwendeten Cookies sind sogenannte „Session-Cookies". Sie werden nach Ende Ihres
            Besuchs automatisch gelöscht.
          </p>
        </section>

        {/* 3 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">
            3. Kommunikation via WhatsApp Business
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            Wir bieten auf unserer Website die Möglichkeit, über den Messaging-Dienst WhatsApp mit
            uns in Kontakt zu treten. Anbieter ist die Meta Platforms Ireland Management Limited
            (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland).
          </p>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            Wenn Sie uns eine Anfrage per WhatsApp senden, übermitteln Sie uns automatisch Ihre
            Telefonnummer sowie den Inhalt Ihrer Nachricht. Die Nutzung dieses Dienstes erfolgt
            freiwillig durch Ihre aktive Kontaktaufnahme.
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            <strong className="text-white">Wichtiger Hinweis zum Datentransfer:</strong> WhatsApp
            verarbeitet Daten teilweise auch auf Servern in den USA. Die Muttergesellschaft Meta
            Platforms Inc. nutzt Standardvertragsklauseln der EU-Kommission, um ein angemessenes
            Datenschutzniveau zu garantieren. Wir nutzen die WhatsApp Business-Version auf unseren
            Endgeräten, um Kundenanfragen intern effizient zu bearbeiten. Ihre Chat-Daten werden
            vertraulich behandelt und nicht an Dritte weitergegeben, es sei denn, dies ist zur
            Erfüllung Ihres Auftrags zwingend erforderlich.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">
            4. Webanalyse und Tracking (Google Analytics)
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-white/50 italic">
            Hinweis: Diese Funktion kann aktiv oder für zukünftige Implementierungen vorbereitet
            sein.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            Soweit Sie Ihre Einwilligung erteilt haben, nutzt diese Website Google Analytics,
            einen Webanalysedienst der Google LLC. Verantwortliche Stelle für Nutzer in Europa ist
            Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland).
          </p>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch
            Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung
            dieser Website werden in der Regel an einen Server von Google in den USA übertragen
            und dort gespeichert. Wir nutzen Google Analytics ausschliesslich mit aktivierter
            IP-Anonymisierung, sodass Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der
            Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen
            Wirtschaftsraum sowie in der Schweiz zuvor gekürzt wird.
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            Sie können die Erfassung der Daten durch das Google-Cookie verhindern, indem Sie die
            Cookie-Einstellungen auf unserer Website anpassen oder ein entsprechendes
            Browser-Plugin installieren.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">
            5. Ihre Rechte als betroffene Person
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            Nach dem Schweizer Datenschutzgesetz (nDSG) haben Sie bezüglich Ihrer von uns
            verarbeiteten Daten folgende Rechte:
          </p>
          <ul className="mb-4 space-y-3 text-sm text-white/70">
            <li>
              <strong className="text-white">Auskunftsrecht:</strong> Sie haben das Recht zu
              erfahren, ob und welche personenbezogenen Daten wir über Sie speichern.
            </li>
            <li>
              <strong className="text-white">Recht auf Berichtigung:</strong> Sie können die
              Korrektur unrichtiger oder unvollständiger Daten verlangen.
            </li>
            <li>
              <strong className="text-white">Recht auf Löschung:</strong> Sie haben das Recht,
              die Löschung Ihrer Daten zu verlangen, sofern keine gesetzliche
              Aufbewahrungspflicht dem entgegensteht.
            </li>
            <li>
              <strong className="text-white">Widerspruchsrecht:</strong> Sie können der
              Verarbeitung Ihrer Daten jederzeit mit Wirkung für die Zukunft widersprechen.
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-white/70">
            Möchten Sie eines dieser Rechte ausüben, wenden Sie sich bitte per E-Mail an:{' '}
            <a href={`mailto:${company.email}`} className="text-white transition hover:text-white/80">
              {company.email}
            </a>
            .
          </p>
        </section>

        {/* 6 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">6. Datensicherheit</h2>
          <p className="text-sm leading-relaxed text-white/70">
            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure
            Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von
            Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes
            verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des
            Schüssel- beziehungsweise Schloss-Symbols in der Statusleiste Ihres Browsers.
          </p>
        </section>

        {/* 7 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">
            7. Änderungen dieser Datenschutzerklärung
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit anzupassen,
            damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen
            unserer Dienste in der Datenschutzerklärung umzusetzen (z. B. bei der Einführung
            neuer Funktionen). Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>
        </section>

        <p className="text-xs text-white/40">
          Diese Datenschutzerklärung wurde zuletzt am 28. Mai 2026 aktualisiert.
        </p>
      </main>
    </>
  );
}
