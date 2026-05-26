/**
 * Wstrzykuje structured data (JSON-LD) bezpośrednio w <head>/<body>.
 * Server component – brak 'use client'.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
