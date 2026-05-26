export type GtSection = { heading: string; text: string };

export type GtCategory = {
  slug: string;
  title: string;
  tagline: string;
  imageUrl: string;
  intro: string;
  features: string[];
  sections: GtSection[];
};

export const GT_CATEGORIES: GtCategory[] = [
  {
    slug: 'lueftung-klima',
    title: 'Lüftung & Klima',
    tagline: 'Frische Luft. Perfekte Raumtemperatur.',
    imageUrl:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Frische Luft und die perfekte Raumtemperatur ohne unnötigen Energieverlust. Wir projektieren und prüfen Lüftungssysteme, Klimaanlagen sowie industrielle Kälteanlagen für Wohn-, Gewerbe- und Industriebauten inklusive präziser Luftmengenmessung und Hygienekontrollen.',
    features: [
      'Lüftungssysteme (KVS / WRG)',
      'Klimaanlagen & Split-Systeme',
      'Industrielle Kälteanlagen',
      'Luftmengenmessung & Regulierung',
      'Hygienekontrollen nach SIA',
      'Energieoptimierung Lüftung',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Als unabhängige Experten und HLKS-Ingenieure betrachten wir die gesamte Gebäudetechnik als ein vernetztes Gesamtsystem. Wir verkaufen keine Standardgeräte – wir planen, optimieren und kontrollieren Ihre Anlagen, damit sie absolut störungsfrei, energieeffizient und mit minimalen Betriebskosten laufen.',
      },
      {
        heading: 'Planung und Konzeption',
        text: 'Wir entwickeln massgeschneiderte und zukunftssichere Konzepte für Lüftungs- und Klimasysteme, exakt abgestimmt auf die spezifischen Anforderungen Ihres Gebäudes – von der einfachen Wohnraumlüftung bis zur komplexen industriellen Klimatisierung.',
      },
      {
        heading: 'Energieeffizienz- und Betriebsoptimierungen (eBO)',
        text: 'Ihre Lüftungs- und Klimaanlage kann mehr leisten. Wir analysieren bestehende HLKS-Anlagen im Detail, spüren versteckte Energiefresser auf und führen eine systematische Feinabstimmung der Systeme im laufenden Betrieb durch, um Ihre Energiekosten spürbar zu senken.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter erstellen wir fundierte und rechtssichere technische Expertisen. Präzise Ursachenanalyse bei Systemausfällen, Fehlfunktionen oder mangelhafter Leistung von Lüftungs- und Kälteanlagen.',
      },
    ],
  },
  {
    slug: 'heizung',
    title: 'Heizung',
    tagline: 'Effiziente Wärme. Nachhaltig geplant.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Moderne und energieeffiziente Heizungssysteme für Ihr Gebäude. Als unabhängige HLKS-Ingenieure planen und optimieren wir Heizungsanlagen ohne Bindung an Hersteller – von der Wärmepumpe über Fernwärme bis zur Pelletsheizung. Unser Fokus liegt auf dem hydraulischen Abgleich und der Systemintegration für maximale Effizienz.',
    features: [
      'Wärmepumpen (Luft/Wasser, Erdwärme)',
      'Fernwärme-Übergabestationen',
      'Pelletsheizungen & Biomasse',
      'Hydraulischer Abgleich',
      'Heizungsoptimierung & eBO',
      'Sanierungs- und Ersatzkonzepte',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Als unabhängige HLKS-Ingenieure sind wir an keinen Hersteller gebunden. Wir wählen für Sie die optimale Heizungstechnologie aus – basierend auf Ihrem Gebäude, Ihrem Budget und den aktuellen Energiepreisen. Unser Ziel ist immer der maximale Wirkungsgrad bei minimalen Betriebskosten.',
      },
      {
        heading: 'Planung und Konzeption von Heizungsanlagen',
        text: 'Von der Auslegungsberechnung bis zur Planung der Rohrführung: Wir entwickeln ein massgeschneidertes Heizungskonzept für Ihr Gebäude. Besonderer Fokus liegt auf dem hydraulischen Abgleich, damit jeder Raum gleichmässig und effizient mit Wärme versorgt wird.',
      },
      {
        heading: 'Heizungsersatz und Sanierungskonzepte',
        text: 'Alte Ölheizung oder defektes Heizsystem? Wir analysieren Ihren Bedarf und entwickeln herstellerunabhängige Strategien für den Heizungsersatz – inklusive Förderberatung (Bundes- und Kantonsbeiträge) für den Wechsel auf erneuerbare Energien.',
      },
      {
        heading: 'Energieeffizienz- und Betriebsoptimierungen (eBO)',
        text: 'Ihre bestehende Heizungsanlage kann effizienter laufen. Wir überprüfen die Einstellparameter, führen den hydraulischen Abgleich durch und optimieren die Betriebszeiten – spürbare Einsparungen ohne grossen Investitionsaufwand.',
      },
    ],
  },
  {
    slug: 'solar',
    title: 'Solar & Photovoltaik',
    tagline: 'Sauber. Effizient. Zukunftssicher.',
    imageUrl:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Nachhaltige Stromerzeugung direkt auf Ihrem Dach. Wir planen hocheffiziente Photovoltaikanlagen, optimieren Stromspeichersysteme und konzipieren intelligente Lösungen für die E-Mobilität (Ladestationen/Wallboxen).',
    features: [
      'Photovoltaikanlagen (PV)',
      'Batteriespeichersysteme',
      'E-Mobilität & Wallboxen',
      'Netzeinspeisung & Eigenverbrauch',
      'Ertragsanalysen & Renditeberechnung',
      'Wartung und Monitoring',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Als unabhängige Energieexperten planen wir hocheffiziente PV-Anlagen ohne Bindung an einen Hersteller – immer mit dem Ziel, maximalen Eigenverbrauch und minimale Amortisationszeit zu erreichen.',
      },
      {
        heading: 'Planung und Konzeption von PV-Anlagen',
        text: 'Wir analysieren Ihre Dachfläche, Ausrichtung und Ihren Stromverbrauch und berechnen den optimalen Anlagentyp. Das Ergebnis: ein massgeschneidertes Solarkonzept mit realistischer Ertragsanalyse und Amortisationsrechnung.',
      },
      {
        heading: 'Sanierungs- und Modernisierungskonzepte',
        text: 'Bestehende PV-Anlage veraltet? Wir entwickeln herstellerunabhängige Strategien für die Modernisierung und Leistungssteigerung Ihrer Solaranlage – inklusive Integration von Batteriespeichern und Wallboxen für E-Mobilität.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter prüfen wir PV-Anlagen nach geltenden Normen und erstellen rechtssichere Expertisen. Technische Bauabnahme, Zweitmeinungen zu Kostenvoranschlägen und Ertragsanalysen.',
      },
    ],
  },
  {
    slug: 'sanitaer',
    title: 'Sanitärtechnische Systeme',
    tagline: 'Hygienisch. Präzise. Nachhaltig.',
    imageUrl:
      'https://images.unsplash.com/photo-1612538498456-e861df91d4d0?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Professionelle Planung und Berechnung von Wasser- und Abwassersystemen. Wir sorgen für hygienisch einwandfreie Trinkwasserinstallationen, moderne Konzepte zur Wasseraufbereitung und eine effiziente Rohrleitungsführung.',
    features: [
      'Trinkwasserinstallationen',
      'Abwassersysteme',
      'Wasseraufbereitung',
      'Rohrleitungsplanung',
      'Legionellenprüfung & Hygieneschutz',
      'Regenwassernutzung',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Als unabhängige HLKS-Ingenieure betrachten wir Sanitäranlagen als Teil des vernetzten Gebäudesystems. Wir planen, optimieren und kontrollieren Ihre Installationen für störungsfreien, hygienisch einwandfreien Betrieb.',
      },
      {
        heading: 'Planung und Konzeption',
        text: 'Wir entwickeln massgeschneiderte Konzepte für Sanitäranlagen, exakt abgestimmt auf die Anforderungen Ihres Gebäudes – von der Trinkwasserinstallation bis zum Entwässerungssystem.',
      },
      {
        heading: 'Energieeffizienz und Wasseroptimierung',
        text: 'Wir analysieren bestehende Sanitäranlagen und spüren versteckte Einsparpotenziale auf. Durch systematische Feinabstimmung senken wir Ihre Wasser- und Energiekosten nachhaltig.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter erstellen wir fundierte technische Expertisen für Eigentümer, Liegenschaftsverwaltungen und Versicherungen. Inklusive Abnahme und Garantieprüfung nach SIA-Normen.',
      },
    ],
  },
];

export function getCategory(slug: string): GtCategory | undefined {
  return GT_CATEGORIES.find((c) => c.slug === slug);
}
