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
    ctaSanierung: 'Désamiantage',
    ctaGebaeudetechnik: 'Technique du bâtiment',
  },
  sanierung: {
    eyebrow: 'Désamiantage & Dépollution',
    title: 'La sécurité\nest prioritaire.',
    text: 'Nous sommes votre spécialiste du désamiantage et de l’assainissement des polluants. Fiable, certifié et avec le plus grand soin.',
    items: ['Désamiantage', 'Polluants', 'Démolition', 'Élimination'],
    cta: 'En savoir plus',
  },
  gebaeudetechnik: {
    eyebrow: 'Technique du bâtiment',
    title: 'La technique\nde demain.',
    text: 'En tant qu’experts indépendants et ingénieurs CVC, nous planifions, optimisons et contrôlons vos installations – sans pannes, efficaces et à moindres coûts d’exploitation.',
    items: [
      { title: 'Ventilation & Climatisation', desc: 'Systèmes de ventilation, climatisation et réfrigération pour tous types de bâtiments.' },
      { title: 'Chauffage', desc: 'Pompes à chaleur, chauffage à distance, chaudières à pellets et équilibrage hydraulique.' },
      { title: 'Solaire & Photovoltaïque', desc: 'Systèmes PV haute performance, stockage d’énergie et solutions de mobilité électrique.' },
      { title: 'Sanitaire', desc: 'Installations d’eau potable hygiéniques, systèmes d’évacuation et contrôle légionelles.' },
    ],
    infoBtn: 'En savoir plus',
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
  cookies: {
    title: 'Paramètres des cookies',
    description:
      'Nous utilisons des cookies pour vous offrir la meilleure expérience sur notre site.',
    acceptAll: 'Tout accepter',
    rejectAll: 'Refuser',
    tableHeader: {
      name: 'Nom',
      purpose: 'Objectif',
      duration: 'Durée',
    },
  },
};

export default fr;
