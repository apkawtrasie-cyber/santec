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
    title: 'Gebäudetechnik & Sanierung\nZwei Kompetenzen\nEin Qualitätsanspruch',
    subtitle:
      'Die Santec Group steht für professionelle Sanierungen und zukunftsorientierte Gebäudetechnik. Sicher. Sauber. Nachhaltig.',
    ctaSanierung: 'Asbest- & Schadstoffsanierung',
    ctaGebaeudetechnik: 'Gebäudetechnik',
  },
  sanierung: {
    eyebrow: 'Asbest- & Schadstoffsanierung',
    title: 'Sicherheit\nhat Priorität.',
    text: 'Wir sind Ihr Spezialist für die fachgerechte Asbestsanierung und Schadstoffsanierung. Zuverlässig, zertifiziert und mit höchster Sorgfalt.',
    items: ['Asbestsanierung', 'Schadstoffsanierung', 'Rückbau', 'Entsorgung'],
    cta: 'Mehr erfahren',
  },
  gebaeudetechnik: {
    eyebrow: 'Gebäudetechnik',
    title: 'Technik für\ndie Zukunft.',
    text: 'Als unabhängige Experten und HLKS-Ingenieure planen, optimieren und kontrollieren wir Ihre Anlagen – störungsfrei, energieeffizient und mit minimalen Betriebskosten.',
    items: [
      { title: 'Lüftung & Klima', desc: 'Lüftungssysteme, Klimaanlagen und Kälteanlagen für Wohn-, Gewerbe- und Industriebauten inkl. Luftmengenmessung.' },
      { title: 'Heizung', desc: 'Wärmepumpen, Fernwärme, Pelletsheizungen und hydraulischer Abgleich – herstellerunabhängig geplant.' },
      { title: 'Solar & Photovoltaik', desc: 'Hocheffiziente PV-Anlagen, Batteriespeicher und E-Mobilitätslösungen (Wallboxen).' },
      { title: 'Sanitär', desc: 'Planung hygienisch einwandfreier Trinkwasserinstallationen, Abwassersysteme und Legionellenprüfung.' },
      { title: 'Service', desc: 'Wartung, Reinigung und Service rund um Klima, Lüftung, Heizung und Sanitär – zuverlässig und planbar.' },
      { title: 'Rückbau Gebäudetechnik', desc: 'Technischer Rückbau und Industriedemontage – von der Planung bis zur Schlüsselübergabe.' },
    ],
    infoBtn: 'Mehr Info',
    cta: 'Mehr erfahren',
  },
  ueberUns: {
    eyebrow: 'Über uns',
    title: 'Erfahrung.\nQualität.\nVerantwortung.',
    text: 'Die Santec Group vereint Fachwissen, Erfahrung und Leidenschaft für sichere Sanierungen und moderne Gebäudetechnik.',
    stats: [
      { value: '30+', label: 'Jahre Erfahrung' },
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
    tagline: 'Zwei Kompetenzen. Ein Qualitätsanspruch.\nSicher. Sauber. Nachhaltig.',
    navigation: 'Navigation',
    kontakt: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
  },
  cookies: {
    title: 'Cookie-Einstellungen',
    description:
      'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.',
    acceptAll: 'Alle akzeptieren',
    rejectAll: 'Ablehnen',
    tableHeader: {
      name: 'Name',
      purpose: 'Zweck',
      duration: 'Dauer',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Häufig gestellte Fragen.',
    text: 'Antworten auf die wichtigsten Fragen rund um Klima, Lüftung, Heizung, Sanitär, Solaranlagen und allgemeine Gebäudetechnik.',
    groups: [
      {
        title: 'Klimaanlagen',
        items: [
          { q: 'Wie oft sollte eine Klimaanlage gewartet werden?', a: 'Wir empfehlen mindestens einen Service pro Jahr. Bei Gastronomie, Büros oder stark genutzten Anlagen sind regelmässige Kontrollen besonders wichtig.' },
          { q: 'Warum riecht meine Klimaanlage unangenehm?', a: 'Oft sind verschmutzte Filter, Bakterien oder Feuchtigkeit die Ursache. Eine professionelle Reinigung verbessert Luftqualität und Hygiene.' },
          { q: 'Kann ich mit einer Klimaanlage auch heizen?', a: 'Ja. Moderne Klimasysteme und Wärmepumpen können effizient kühlen und heizen.' },
          { q: 'Warum kühlt meine Klimaanlage nicht mehr richtig?', a: 'Mögliche Ursachen sind verschmutzte Filter, Kältemittelverlust oder technische Defekte.' },
          { q: 'Wie lange hält eine Klimaanlage?', a: 'Je nach Nutzung und Wartung liegt die Lebensdauer meist zwischen 10 und 15 Jahren.' },
        ],
      },
      {
        title: 'Lüftung & Luftqualität',
        items: [
          { q: 'Warum ist eine saubere Lüftungsanlage wichtig?', a: 'Saubere Lüftungen sorgen für hygienische Luft, weniger Gerüche und einen effizienteren Betrieb.' },
          { q: 'Wie erkenne ich eine verschmutzte Lüftung?', a: 'Typische Anzeichen sind schlechte Gerüche, geringe Luftleistung, Staub oder laute Geräusche.' },
          { q: 'Wie oft sollte eine Lüftung kontrolliert werden?', a: 'Gerade in Restaurants und Gewerbebetrieben empfehlen sich regelmässige Kontrollen und Wartungen.' },
          { q: 'Erhöht eine verschmutzte Lüftung die Stromkosten?', a: 'Ja. Verschmutzte Anlagen benötigen mehr Leistung und verbrauchen dadurch mehr Energie.' },
        ],
      },
      {
        title: 'Heizung & Wärmepumpen',
        items: [
          { q: 'Wann sollte eine Heizung gewartet werden?', a: 'Idealerweise einmal jährlich vor der Heizsaison.' },
          { q: 'Was sind die Vorteile einer Wärmepumpe?', a: 'Wärmepumpen arbeiten energieeffizient, nachhaltig und können je nach System auch kühlen.' },
          { q: 'Warum wird meine Heizung nicht richtig warm?', a: 'Mögliche Ursachen sind Luft im System, Druckverlust oder technische Probleme.' },
          { q: 'Lohnt sich der Ersatz einer alten Heizungsanlage?', a: 'In vielen Fällen ja, da moderne Systeme effizienter und wirtschaftlicher arbeiten.' },
        ],
      },
      {
        title: 'Sanitär',
        items: [
          { q: 'Was tun bei einem tropfenden Wasserhahn?', a: 'Auch kleine Undichtigkeiten sollten schnell behoben werden, um Wasserverlust und Folgeschäden zu vermeiden.' },
          { q: 'Warum schwankt der Wasserdruck?', a: 'Mögliche Ursachen sind Kalkablagerungen, defekte Armaturen oder Probleme in der Leitung.' },
          { q: 'Wie erkenne ich eine undichte Leitung?', a: 'Feuchte Stellen, Wasserflecken, Schimmel oder ein ungewöhnlich hoher Wasserverbrauch können Hinweise sein.' },
          { q: 'Wie oft sollten Sanitäranlagen kontrolliert werden?', a: 'Regelmässige Kontrollen helfen, Schäden frühzeitig zu erkennen und teure Reparaturen zu vermeiden.' },
          { q: 'Bieten Sie auch Bad- und Sanitärsanierungen an?', a: 'Ja. Wir unterstützen bei Modernisierung, Reparaturen und individuellen Sanitärlösungen.' },
        ],
      },
      {
        title: 'Solaranlagen & Photovoltaik',
        items: [
          { q: 'Lohnt sich eine Solaranlage heutzutage noch?', a: 'Ja. Solaranlagen helfen langfristig Energiekosten zu senken und erhöhen die Unabhängigkeit vom Strommarkt.' },
          { q: 'Wie lange hält eine Photovoltaikanlage?', a: 'Die meisten Anlagen haben eine Lebensdauer von 25 Jahren oder mehr.' },
          { q: 'Muss eine Solaranlage gewartet werden?', a: 'Ja. Regelmässige Kontrollen sorgen für maximale Leistung und erkennen Defekte frühzeitig.' },
          { q: 'Funktioniert eine Solaranlage auch im Winter?', a: 'Ja. Auch im Winter wird Strom produziert, allerdings mit geringerer Leistung als im Sommer.' },
          { q: 'Kann ich den Solarstrom selbst nutzen?', a: 'Ja. Der produzierte Strom kann direkt im Gebäude genutzt oder ins Netz eingespeist werden.' },
        ],
      },
      {
        title: 'Gebäudetechnik Allgemein',
        items: [
          { q: 'Was versteht man unter Gebäudetechnik?', a: 'Zur Gebäudetechnik gehören unter anderem Klima, Lüftung, Heizung, Sanitär, Solar und technische Gebäudeanlagen.' },
          { q: 'Warum ist regelmässiger Service wichtig?', a: 'Regelmässiger Service erhöht die Lebensdauer der Anlagen, reduziert Störungen und verbessert die Energieeffizienz.' },
          { q: 'Bieten Sie auch Kontrollen und Expertisen an?', a: 'Ja. Wir führen professionelle Kontrollen, Analysen und technische Expertisen durch.' },
          { q: 'Arbeiten Sie auch für Restaurants und Gewerbebetriebe?', a: 'Ja. Wir betreuen Privatkunden, Gastronomie, Büros und Gewerbebetriebe.' },
          { q: 'Erstellen Sie individuelle Lösungen für Gebäude?', a: 'Ja. Jede Anlage und jedes Objekt wird individuell analysiert und geplant.' },
          { q: 'Wie schnell kann ein Termin vereinbart werden?', a: 'Je nach Aufwand und Region sind oft kurzfristige Termine möglich.' },
        ],
      },
    ],
  },
  whatsapp: {
    header: 'Kundenservice',
    subheader: 'Wir antworten normalerweise innerhalb weniger Minuten',
    greeting: 'Hallo! 👋 Wie kann ich Ihnen helfen? Schreiben Sie uns eine Nachricht und wir melden uns so schnell wie möglich.',
    placeholder: 'Nachricht schreiben…',
    startChat: 'Chat starten',
  },
};

export default de;
