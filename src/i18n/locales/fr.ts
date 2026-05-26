import type { Dictionary } from '../types';

const fr: Dictionary = {
  nav: {
    home: 'Accueil',
    sanierung: 'Rénovation',
    gebaeudetechnik: 'Technique du bâtiment',
    ueberUns: 'À propos',
    kontakt: 'Contact',
    anfrage: 'Demande',
  },
  hero: {
    title: 'Deux compétences.\nUne exigence.',
    subtitle:
      'Santec Group, c’est l’assainissement professionnel et la technique du bâtiment tournée vers l’avenir. Sûr. Propre. Durable.',
    ctaSanierung: 'Rénovation',
    ctaGebaeudetechnik: 'Technique du bâtiment',
  },
  sanierung: {
    eyebrow: 'Rénovation',
    title: 'La sécurité\nest prioritaire.',
    text: 'Nous sommes votre spécialiste du désamiantage et de l’assainissement des polluants. Fiable, certifié et avec le plus grand soin.',
    items: ['Désamiantage', 'Polluants', 'Démolition', 'Élimination'],
    cta: 'En savoir plus',
  },
  gebaeudetechnik: {
    eyebrow: 'Technique du bâtiment',
    title: 'La technique\nde demain.',
    text: 'Nous concevons et réalisons une technique du bâtiment moderne axée sur l’efficacité énergétique, la durabilité et l’innovation.',
    items: ['Chauffage', 'Ventilation', 'Sanitaire', 'Solutions énergétiques'],
    cta: 'En savoir plus',
  },
  ueberUns: {
    eyebrow: 'À propos',
    title: 'Expérience.\nQualité.\nResponsabilité.',
    text: 'Santec Group réunit savoir-faire, expérience et passion pour des rénovations sûres et une technique du bâtiment moderne.',
    stats: [
      { value: '20+', label: "Ans d'expérience" },
      { value: '1000+', label: 'Projets réalisés' },
      { value: '50+', label: "Spécialistes dans l'équipe" },
      { value: '100%', label: 'Satisfaction client' },
    ],
    badges: 'Certifié. Sûr. Fiable.',
  },
  prozess: {
    eyebrow: 'Processus',
    title: 'Notre processus.\nVotre avantage.',
    text: 'Structuré. Transparent. Fiable.',
    steps: [
      { n: '01', title: 'Conseil', text: 'Nous analysons vos besoins et vous conseillons avec compétence.' },
      { n: '02', title: 'Planification', text: 'Nous développons un concept sur mesure pour votre projet.' },
      { n: '03', title: 'Réalisation', text: 'Notre équipe réalise votre projet efficacement et en toute sécurité.' },
      { n: '04', title: 'Remise', text: 'Nous livrons le projet terminé et restons disponibles pour vous.' },
    ],
    cta: 'Démarrer une demande',
  },
  kontakt: {
    eyebrow: 'Contact',
    title: 'Nous sommes\nlà pour vous.',
    text: 'Des questions ou un projet à discuter ? Contactez-nous – nous nous réjouissons de votre demande.',
    form: {
      name: 'Nom',
      email: 'E-mail',
      message: 'Message',
      send: 'Envoyer la demande',
      success: 'Merci ! Nous vous répondrons rapidement.',
      error: "Échec de l'envoi. Veuillez réessayer.",
    },
  },
  footer: {
    tagline: 'Deux compétences. Une exigence.\nSûr. Propre. Durable.',
    navigation: 'Navigation',
    kontakt: 'Contact',
    rights: 'Tous droits réservés.',
    impressum: 'Mentions légales',
    datenschutz: 'Confidentialité',
  },
};

export default fr;
