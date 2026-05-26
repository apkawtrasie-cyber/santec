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
    slug: 'kaelteanlagen',
    title: 'Lüftungs-, Klima- und Kälteanlagen',
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
        text: 'Wir sind kein gewöhnlicher Installationsbetrieb. Als unabhängige Experten und HLKS-Ingenieure betrachten wir die gesamte Gebäudetechnik als ein vernetztes Gesamtsystem. Wir verkaufen keine Standardgeräte – wir planen, optimieren und kontrollieren Ihre Anlagen, damit sie absolut störungsfrei, energieeffizient und mit minimalen Betriebskosten laufen.',
      },
      {
        heading: 'Planung und Konzeption',
        text: 'Der Grundstein für jedes erfolgreiche Bauvorhaben. Wir entwickeln massgeschneiderte und zukunftssichere Konzepte für die gesamte Haustechnik, exakt abgestimmt auf die spezifischen Anforderungen Ihres Gebäudes.',
      },
      {
        heading: 'Energieeffizienz- und Betriebsoptimierungen (eBO)',
        text: 'Ihre Lüftungs- und Klimaanlage kann mehr leisten. Wir analysieren bestehende HLKS-Anlagen im Detail, spüren versteckte Energiefresser auf und führen eine systematische Feinabstimmung der Systeme im laufenden Betrieb durch, um Ihre Energiekosten spürbar zu senken.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter erstellen wir fundierte und rechtssichere technische Expertisen für Eigentümer, Liegenschaftsverwaltungen, Versicherungen und Gerichte. Präzise Ursachenanalyse bei Systemausfällen, Fehlfunktionen oder mangelhafter Leistung von Lüftungs- und Kälteanlagen.',
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
        text: 'Wir sind kein gewöhnlicher Installationsbetrieb. Als unabhängige Experten und HLKS-Ingenieure betrachten wir die gesamte Gebäudetechnik als ein vernetztes Gesamtsystem. Wir verkaufen keine Standardgeräte – wir planen, optimieren und kontrollieren Ihre Anlagen, damit sie absolut störungsfrei, energieeffizient und mit minimalen Betriebskosten laufen.',
      },
      {
        heading: 'Planung und Konzeption',
        text: 'Der Grundstein für jedes erfolgreiche Bauvorhaben. Wir entwickeln massgeschneiderte und zukunftssichere Konzepte für Sanitäranlagen, exakt abgestimmt auf die spezifischen Anforderungen Ihres Gebäudes.',
      },
      {
        heading: 'Energieeffizienz und Wasseroptimierung',
        text: 'Wir analysieren bestehende Sanitäranlagen und spüren versteckte Einsparpotenziale auf. Durch eine systematische Feinabstimmung der Systeme im laufenden Betrieb senken wir Ihre Wasser- und Energiekosten nachhaltig.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter erstellen wir fundierte technische Expertisen für Eigentümer, Liegenschaftsverwaltungen und Versicherungen. Inklusive Abnahme und Garantieprüfung nach geltenden SIA-Normen.',
      },
    ],
  },
  {
    slug: 'elektro',
    title: 'Elektro- und Gebäudeinstallationen',
    tagline: 'Smart. Sicher. Vernetzt.',
    imageUrl:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Umfassende technische Beurteilung und Planung moderner Elektroinfrastrukturen. Wir integrieren Stark- und Schwachstromanlagen, Sicherheitsbeleuchtungen und moderne Gebäudeautomationssysteme (Smart Home) in das Gesamtkonzept.',
    features: [
      'Starkstrom- und Schwachstromanlagen',
      'Sicherheitsbeleuchtung & Notlicht',
      'Gebäudeautomation (Smart Home)',
      'Schalttafelbau und -prüfung',
      'Blitzschutz und Erdung',
      'Ladeinfrastruktur (EV)',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Wir sind kein gewöhnlicher Installationsbetrieb. Als unabhängige Experten betrachten wir die gesamte Gebäudetechnik als ein vernetztes Gesamtsystem. Wir planen, optimieren und kontrollieren Ihre Elektroanlagen, damit sie sicher, zukunftsfähig und energieeffizient sind.',
      },
      {
        heading: 'Planung und Konzeption',
        text: 'Der Grundstein für jedes erfolgreiche Bauvorhaben. Wir entwickeln massgeschneiderte Konzepte für die gesamte Elektroinstallation, exakt abgestimmt auf die Anforderungen Ihres Gebäudes – inklusive BIM-Integration auf Wunsch.',
      },
      {
        heading: 'Koordination und Begleitung von Projekten',
        text: 'Alles im Griff von der Idee bis zur Übergabe. Wir übernehmen die fachliche Koordination aller beteiligten Gewerke, sichern die Qualitätsstandards und begleiten die finale Inbetriebsetzung der elektrischen Anlagen.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter erstellen wir fundierte Expertisen für Eigentümer, Liegenschaftsverwaltungen und Versicherungen. Technische Bauabnahme und Garantieprüfung nach SIA-Normen.',
      },
    ],
  },
  {
    slug: 'photovoltaik',
    title: 'Photovoltaik- und Energiesysteme',
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
        text: 'Wir sind kein gewöhnlicher Installationsbetrieb. Als unabhängige Energieexperten planen wir hocheffiziente PV-Anlagen ohne Bindung an einen Hersteller – immer mit dem Ziel, maximalen Eigenverbrauch und minimale Amortisationszeit zu erreichen.',
      },
      {
        heading: 'Sanierungs- und Modernisierungskonzepte',
        text: 'Zukunftssichere Planung für bestehende Immobilien. Wir entwickeln herstellerunabhängige Strategien für die energetische Sanierung und die Dekarbonisierung (CO₂-Reduktion) Ihres Gebäudeparks.',
      },
      {
        heading: 'Energieeffizienz- und Betriebsoptimierungen (eBO)',
        text: 'Ihre Energieanlage kann mehr leisten. Wir analysieren bestehende PV-Systeme im Detail, spüren Leistungsverluste auf und führen eine systematische Feinabstimmung durch, um Ihren Solarertrag zu maximieren.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter prüfen wir PV-Anlagen nach geltenden Normen und erstellen rechtssichere Expertisen. Technische Bauabnahme, Zweitmeinungen zu Kostenvoranschlägen und Ertragsanalysen.',
      },
    ],
  },
];

export function getCategory(slug: string): GtCategory | undefined {
  return GT_CATEGORIES.find((c) => c.slug === slug);
}
