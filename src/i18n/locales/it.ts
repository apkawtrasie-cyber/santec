import type { Dictionary } from '../types';

const it: Dictionary = {
  nav: {
    home: 'Home',
    sanierung: 'Risanamento',
    gebaeudetechnik: 'Tecnica edile',
    ueberUns: 'Chi siamo',
    kontakt: 'Contatto',
    anfrage: 'Richiesta',
  },
  hero: {
    title: 'Due competenze.\nUn’unica esigenza.',
    subtitle:
      'Santec Group significa risanamento professionale e tecnica edile orientata al futuro. Sicuro. Pulito. Sostenibile.',
    ctaSanierung: 'Bonifica Amianto',
    ctaGebaeudetechnik: 'Tecnica edile',
  },
  sanierung: {
    eyebrow: 'Bonifica Amianto & Inquinanti',
    title: 'La sicurezza\nè prioritaria.',
    text: 'Siamo il vostro specialista per la rimozione dell’amianto e degli inquinanti. Affidabile, certificato e con la massima cura.',
    items: ['Rimozione amianto', 'Rimozione inquinanti', 'Demolizione', 'Smaltimento'],
    cta: 'Scopri di più',
  },
  gebaeudetechnik: {
    eyebrow: 'Tecnica edile',
    title: 'Tecnologia per\nil futuro.',
    text: 'Come esperti indipendenti e ingegneri HVAC pianifichiamo, ottimizziamo e controlliamo i vostri impianti – senza guasti, efficienti e a costi operativi minimi.',
    items: [
      { title: 'Impianti frigoriferi', desc: 'Ventilazione, climatizzazione e refrigerazione per edifici residenziali, commerciali e industriali.' },
      { title: 'Sistemi sanitari', desc: 'Pianificazione e calcolo di impianti idrico-sanitari igienici e sistemi di scarico.' },
      { title: 'Impianti elettrici', desc: 'Infrastrutture elettriche moderne con domotica, automazione e illuminazione di sicurezza.' },
      { title: 'Fotovoltaico & energia', desc: 'Impianti FV ad alta efficienza, sistemi di accumulo e mobilità elettrica (wallbox).' },
    ],
    infoBtn: 'Maggiori info',
    cta: 'Scopri di più',
  },
  ueberUns: {
    eyebrow: 'Chi siamo',
    title: 'Esperienza.\nQualità.\nResponsabilità.',
    text: 'Santec Group unisce competenza, esperienza e passione per risanamenti sicuri e tecnica edile moderna.',
    stats: [
      { value: '20+', label: 'Anni di esperienza' },
      { value: '1000+', label: 'Progetti realizzati' },
      { value: '50+', label: 'Specialisti nel team' },
      { value: '100%', label: 'Soddisfazione dei clienti' },
    ],
    badges: 'Certificato. Sicuro. Affidabile.',
  },
  prozess: {
    eyebrow: 'Processo',
    title: 'Il nostro processo.\nIl vostro vantaggio.',
    text: 'Strutturato. Trasparente. Affidabile.',
    steps: [
      { n: '01', title: 'Consulenza', text: 'Analizziamo le vostre esigenze e vi offriamo una consulenza competente.' },
      { n: '02', title: 'Pianificazione', text: 'Sviluppiamo un concetto su misura per il vostro progetto.' },
      { n: '03', title: 'Realizzazione', text: 'Il nostro team realizza il progetto in modo efficiente e sicuro.' },
      { n: '04', title: 'Consegna', text: 'Consegniamo il progetto finito e restiamo a disposizione anche dopo.' },
    ],
    cta: 'Avvia richiesta',
  },
  kontakt: {
    eyebrow: 'Contatto',
    title: 'Siamo qui\nper voi.',
    text: 'Avete domande o un progetto da discutere? Contattateci – attendiamo la vostra richiesta.',
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Messaggio',
      send: 'Invia richiesta',
      success: 'Grazie! Vi risponderemo a breve.',
      error: 'Invio non riuscito. Riprovare.',
    },
  },
  footer: {
    tagline: 'Due competenze. Un’unica esigenza.\nSicuro. Pulito. Sostenibile.',
    navigation: 'Navigazione',
    kontakt: 'Contatto',
    rights: 'Tutti i diritti riservati.',
    impressum: 'Impressum',
    datenschutz: 'Privacy',
  },
  cookies: {
    title: 'Impostazioni cookie',
    description:
      'Utilizziamo i cookie per offrirti la migliore esperienza possibile sul nostro sito.',
    acceptAll: 'Accetta tutto',
    rejectAll: 'Rifiuta',
    tableHeader: {
      name: 'Nome',
      purpose: 'Scopo',
      duration: 'Durata',
    },
  },
};

export default it;
