import type { Dictionary } from '../types';

const de: Dictionary = {
  nav: {
    home: 'Home',
    sanierung: 'Sanierung',
    gebaeudetechnik: 'Gebäudetechnik',
    ueberUns: 'Über uns',
    kontakt: 'Kontakt',
    anfrage: 'Anfrage',
  },
  hero: {
    title: 'Zwei Kompetenzen.\nEin Anspruch.',
    subtitle:
      'Die Santec Group steht für professionelle Sanierungen und zukunftsorientierte Gebäudetechnik. Sicher. Sauber. Nachhaltig.',
    ctaSanierung: 'Sanierung',
    ctaGebaeudetechnik: 'Gebäudetechnik',
  },
  sanierung: {
    eyebrow: 'Sanierung',
    title: 'Sicherheit\nhat Priorität.',
    text: 'Wir sind Ihr Spezialist für die fachgerechte Asbestsanierung und Schadstoffsanierung. Zuverlässig, zertifiziert und mit höchster Sorgfalt.',
    items: ['Asbestsanierung', 'Schadstoffsanierung', 'Rückbau', 'Entsorgung'],
    cta: 'Mehr erfahren',
  },
  gebaeudetechnik: {
    eyebrow: 'Gebäudetechnik',
    title: 'Technik für\ndie Zukunft.',
    text: 'Wir planen und realisieren moderne Gebäudetechnik mit Fokus auf Energieeffizienz, Nachhaltigkeit und Innovation.',
    items: ['Heizung', 'Lüftung', 'Sanitär', 'Energielösungen'],
    cta: 'Mehr erfahren',
  },
  ueberUns: {
    eyebrow: 'Über uns',
    title: 'Erfahrung.\nQualität.\nVerantwortung.',
    text: 'Die Santec Group vereint Fachwissen, Erfahrung und Leidenschaft für sichere Sanierungen und moderne Gebäudetechnik.',
    stats: [
      { value: '20+', label: 'Jahre Erfahrung' },
      { value: '1000+', label: 'Projekte umgesetzt' },
      { value: '50+', label: 'Spezialisten im Team' },
      { value: '100%', label: 'Kunden zufriedenheit' },
    ],
    badges: 'Zertifiziert. Sicher. Zuverlässig.',
  },
  prozess: {
    eyebrow: 'Prozess',
    title: 'Unser Prozess.\nIhr Vorteil.',
    text: 'Strukturiert. Transparent. Zuverlässig.',
    steps: [
      { n: '01', title: 'Beratung', text: 'Wir analysieren Ihre Anforderungen und beraten Sie kompetent.' },
      { n: '02', title: 'Planung', text: 'Wir entwickeln ein massgeschneidertes Konzept für Ihr Projekt.' },
      { n: '03', title: 'Umsetzung', text: 'Unser Team setzt Ihr Projekt effizient und sicher um.' },
      { n: '04', title: 'Übergabe', text: 'Wir übergeben fertiggestellt und stehen auch danach für Sie da.' },
    ],
    cta: 'Anfrage starten',
  },
  kontakt: {
    eyebrow: 'Kontakt',
    title: 'Wir sind für\nSie da.',
    text: 'Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie uns – wir freuen uns auf Ihre Anfrage.',
    form: {
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Anfrage senden',
      success: 'Vielen Dank! Wir melden uns in Kürze.',
      error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
    },
  },
  footer: {
    tagline: 'Zwei Kompetenzen. Ein Anspruch.\nSicher. Sauber. Nachhaltig.',
    navigation: 'Navigation',
    kontakt: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
  },
};

export default de;
