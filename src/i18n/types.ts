export interface Dictionary {
  nav: {
    home: string;
    sanierung: string;
    gebaeudetechnik: string;
    ueberUns: string;
    kontakt: string;
    anfrage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaSanierung: string;
    ctaGebaeudetechnik: string;
  };
  sanierung: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
    cta: string;
  };
  gebaeudetechnik: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
    cta: string;
  };
  ueberUns: {
    eyebrow: string;
    title: string;
    text: string;
    stats: { value: string; label: string }[];
    badges: string;
  };
  prozess: {
    eyebrow: string;
    title: string;
    text: string;
    steps: { n: string; title: string; text: string }[];
    cta: string;
  };
  kontakt: {
    eyebrow: string;
    title: string;
    text: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    navigation: string;
    kontakt: string;
    rights: string;
    impressum: string;
    datenschutz: string;
  };
}
