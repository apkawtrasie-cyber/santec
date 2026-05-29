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
    title: 'Technique du bâtiment\nAssainissement Suisse',
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
      { title: 'Service', desc: 'Entretien, nettoyage et service pour climatisation, ventilation, chauffage et sanitaire – fiable et planifié.' },
      { title: 'Démantèlement des installations techniques', desc: 'Démantèlement technique et démolition industrielle – de la planification à la remise des clés.' },
    ],
    infoBtn: 'En savoir plus',
    cta: 'En savoir plus',
  },
  ueberUns: {
    eyebrow: 'À propos',
    title: 'Expérience.\nQualité.\nResponsabilité.',
    text: 'Santec Group réunit savoir-faire, expérience et passion pour des rénovations sûres et une technique du bâtiment moderne.',
    stats: [
      { value: '30+', label: "Ans d'expérience" },
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
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions fréquentes.',
    text: 'Réponses aux questions les plus importantes sur climatisation, ventilation, chauffage, sanitaire, solaire et technique du bâtiment en général.',
    groups: [
      {
        title: 'Climatisation',
        items: [
          { q: 'À quelle fréquence entretenir une climatisation ?', a: 'Nous recommandons au moins un service par an. Pour la restauration, les bureaux ou les installations très utilisées, des contrôles réguliers sont particulièrement importants.' },
          { q: 'Pourquoi ma climatisation sent-elle mauvais ?', a: 'Souvent des filtres encrassés, bactéries ou humidité en sont la cause. Un nettoyage professionnel améliore la qualité de l’air et l’hygiène.' },
          { q: 'Puis-je aussi chauffer avec une climatisation ?', a: 'Oui. Les systèmes climatiques modernes et pompes à chaleur peuvent refroidir et chauffer efficacement.' },
          { q: 'Pourquoi ma clim ne refroidit-elle plus correctement ?', a: 'Les causes possibles : filtres encrassés, perte de fluide frigorigène ou défauts techniques.' },
          { q: 'Quelle est la durée de vie d’une climatisation ?', a: 'Selon l’usage et l’entretien, la durée de vie est généralement de 10 à 15 ans.' },
        ],
      },
      {
        title: 'Ventilation & Qualité de l’air',
        items: [
          { q: 'Pourquoi une ventilation propre est-elle importante ?', a: 'Une ventilation propre garantit un air hygiénique, moins d’odeurs et un fonctionnement plus efficace.' },
          { q: 'Comment reconnaître une ventilation encrassée ?', a: 'Signes typiques : mauvaises odeurs, faible débit d’air, poussière ou bruits forts.' },
          { q: 'À quelle fréquence contrôler la ventilation ?', a: 'Surtout dans les restaurants et entreprises, des contrôles et entretiens réguliers sont recommandés.' },
          { q: 'Une ventilation sale augmente-t-elle les coûts d’électricité ?', a: 'Oui. Les installations encrassées requièrent plus de puissance et consomment davantage d’énergie.' },
        ],
      },
      {
        title: 'Chauffage & Pompes à chaleur',
        items: [
          { q: 'Quand entretenir le chauffage ?', a: 'Idéalement une fois par an avant la saison de chauffe.' },
          { q: 'Quels sont les avantages d’une pompe à chaleur ?', a: 'Les pompes à chaleur sont écoénergétiques, durables et peuvent aussi refroidir selon le système.' },
          { q: 'Pourquoi mon chauffage ne chauffe-t-il pas assez ?', a: 'Causes possibles : air dans le système, perte de pression ou problèmes techniques.' },
          { q: 'Vaut-il la peine de remplacer un vieux chauffage ?', a: 'Dans de nombreux cas oui, car les systèmes modernes sont plus efficaces et économiques.' },
        ],
      },
      {
        title: 'Sanitaire',
        items: [
          { q: 'Que faire en cas de robinet qui goutte ?', a: 'Même les petites fuites doivent être réparées rapidement pour éviter pertes d’eau et dégâts.' },
          { q: 'Pourquoi la pression d’eau varie-t-elle ?', a: 'Causes possibles : tartre, robinetterie défectueuse ou problèmes de canalisation.' },
          { q: 'Comment détecter une fuite ?', a: 'Taches humides, traces d’eau, moisissures ou consommation d’eau inhabituellement élevée peuvent être des indices.' },
          { q: 'À quelle fréquence contrôler les sanitaires ?', a: 'Des contrôles réguliers aident à détecter les dommages tôt et éviter des réparations coûteuses.' },
          { q: 'Proposez-vous aussi des rénovations de salle de bain ?', a: 'Oui. Nous accompagnons la modernisation, les réparations et les solutions sanitaires individuelles.' },
        ],
      },
      {
        title: 'Solaire & Photovoltaïque',
        items: [
          { q: 'Une installation solaire est-elle encore rentable aujourd’hui ?', a: 'Oui. Les installations solaires réduisent les coûts énergétiques à long terme et augmentent l’indépendance.' },
          { q: 'Quelle est la durée de vie d’une installation PV ?', a: 'La plupart des installations ont une durée de vie de 25 ans ou plus.' },
          { q: 'Une installation solaire nécessite-t-elle un entretien ?', a: 'Oui. Des contrôles réguliers assurent une performance maximale et détectent les défauts tôt.' },
          { q: 'Une installation solaire fonctionne-t-elle en hiver ?', a: 'Oui. De l’électricité est produite aussi en hiver, mais avec une puissance moindre qu’en été.' },
          { q: 'Puis-je utiliser moi-même l’électricité solaire ?', a: 'Oui. L’électricité produite peut être consommée directement ou injectée dans le réseau.' },
        ],
      },
      {
        title: 'Technique du bâtiment générale',
        items: [
          { q: 'Qu’est-ce que la technique du bâtiment ?', a: 'Elle comprend notamment climatisation, ventilation, chauffage, sanitaire, solaire et autres installations techniques.' },
          { q: 'Pourquoi un service régulier est-il important ?', a: 'Un service régulier prolonge la durée de vie, réduit les pannes et améliore l’efficacité énergétique.' },
          { q: 'Proposez-vous des contrôles et expertises ?', a: 'Oui. Nous effectuons des contrôles, analyses et expertises techniques professionnelles.' },
          { q: 'Travaillez-vous aussi pour des restaurants et entreprises ?', a: 'Oui. Nous servons particuliers, restauration, bureaux et entreprises.' },
          { q: 'Proposez-vous des solutions individuelles ?', a: 'Oui. Chaque installation et bâtiment est analysé et planifié individuellement.' },
          { q: 'Quand un rendez-vous peut-il être fixé ?', a: 'Selon la charge et la région, des rendez-vous à court terme sont souvent possibles.' },
        ],
      },
    ],
  },
  whatsapp: {
    header: 'Service Client',
    subheader: 'Nous répondons généralement en quelques minutes',
    greeting: 'Bonjour! 👋 Comment puis-je vous aider? Envoyez-nous un message et nous vous répondrons dès que possible.',
    placeholder: 'Écrire un message…',
    startChat: 'Démarrer le chat',
  },
};

export default fr;
