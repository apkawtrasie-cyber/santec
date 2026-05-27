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
    title: 'Due competenze.\nUn’unica esigenza di qualità.',
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
      { title: 'Ventilazione & Clima', desc: 'Sistemi di ventilazione, climatizzazione e refrigerazione per tutti i tipi di edifici.' },
      { title: 'Riscaldamento', desc: 'Pompe di calore, teleriscaldamento, caldaie a pellet e bilanciamento idraulico.' },
      { title: 'Solare & Fotovoltaico', desc: 'Impianti FV ad alta efficienza, sistemi di accumulo e mobilità elettrica (wallbox).' },
      { title: 'Sanitario', desc: 'Installazioni idrosanitarie igieniche, sistemi di scarico e controllo legionella.' },
      { title: 'Service', desc: 'Manutenzione, pulizia e assistenza per climatizzazione, ventilazione, riscaldamento e sanitario – affidabile e pianificato.' },
    ],
    infoBtn: 'Maggiori info',
    cta: 'Scopri di più',
  },
  ueberUns: {
    eyebrow: 'Chi siamo',
    title: 'Esperienza.\nQualità.\nResponsabilità.',
    text: 'Santec Group unisce competenza, esperienza e passione per risanamenti sicuri e tecnica edile moderna.',
    stats: [
      { value: '30+', label: 'Anni di esperienza' },
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
  faq: {
    eyebrow: 'FAQ',
    title: 'Domande frequenti.',
    text: 'Risposte alle domande più importanti su climatizzazione, ventilazione, riscaldamento, sanitario, solare e tecnica edile generale.',
    groups: [
      {
        title: 'Climatizzatori',
        items: [
          { q: 'Ogni quanto va effettuata la manutenzione di un climatizzatore?', a: 'Consigliamo almeno un service all’anno. Per ristoranti, uffici o impianti molto utilizzati, controlli regolari sono particolarmente importanti.' },
          { q: 'Perché il mio climatizzatore ha un cattivo odore?', a: 'Spesso filtri sporchi, batteri o umidità ne sono la causa. Una pulizia professionale migliora qualità dell’aria e igiene.' },
          { q: 'Posso riscaldare con un climatizzatore?', a: 'Sì. I moderni sistemi climatici e le pompe di calore possono raffreddare e riscaldare in modo efficiente.' },
          { q: 'Perché il mio climatizzatore non raffredda più bene?', a: 'Possibili cause: filtri sporchi, perdita di refrigerante o difetti tecnici.' },
          { q: 'Quanto dura un climatizzatore?', a: 'A seconda dell’uso e della manutenzione, la durata è in genere 10–15 anni.' },
        ],
      },
      {
        title: 'Ventilazione & Qualità dell’aria',
        items: [
          { q: 'Perché è importante una ventilazione pulita?', a: 'Una ventilazione pulita garantisce aria igienica, meno odori e un funzionamento più efficiente.' },
          { q: 'Come riconosco una ventilazione sporca?', a: 'Segni tipici: cattivi odori, scarso flusso d’aria, polvere o rumori forti.' },
          { q: 'Ogni quanto va controllata la ventilazione?', a: 'Soprattutto in ristoranti e attività commerciali, controlli regolari sono consigliati.' },
          { q: 'Una ventilazione sporca aumenta i costi elettrici?', a: 'Sì. Gli impianti sporchi richiedono più potenza e consumano più energia.' },
        ],
      },
      {
        title: 'Riscaldamento & Pompe di calore',
        items: [
          { q: 'Quando va effettuata la manutenzione del riscaldamento?', a: 'Idealmente una volta all’anno prima della stagione invernale.' },
          { q: 'Quali sono i vantaggi di una pompa di calore?', a: 'Le pompe di calore lavorano in modo efficiente, sostenibile e a seconda del sistema possono anche raffreddare.' },
          { q: 'Perché il riscaldamento non scalda bene?', a: 'Possibili cause: aria nel sistema, perdita di pressione o problemi tecnici.' },
          { q: 'Vale la pena sostituire un vecchio impianto di riscaldamento?', a: 'In molti casi sì, poiché i sistemi moderni sono più efficienti ed economici.' },
        ],
      },
      {
        title: 'Sanitario',
        items: [
          { q: 'Cosa fare in caso di rubinetto che gocciola?', a: 'Anche piccole perdite vanno riparate rapidamente per evitare sprechi d’acqua e danni.' },
          { q: 'Perché la pressione dell’acqua varia?', a: 'Possibili cause: calcare, rubinetteria difettosa o problemi alle tubature.' },
          { q: 'Come riconosco una tubatura che perde?', a: 'Macchie umide, segni d’acqua, muffa o consumo d’acqua insolitamente alto possono essere indizi.' },
          { q: 'Ogni quanto controllare gli impianti sanitari?', a: 'Controlli regolari aiutano a individuare i danni in tempo e evitare costose riparazioni.' },
          { q: 'Offrite anche ristrutturazioni di bagno e sanitari?', a: 'Sì. Supportiamo modernizzazioni, riparazioni e soluzioni sanitarie individuali.' },
        ],
      },
      {
        title: 'Solare & Fotovoltaico',
        items: [
          { q: 'Un impianto solare conviene ancora oggi?', a: 'Sì. Gli impianti solari aiutano a ridurre i costi energetici a lungo termine e aumentano l’indipendenza.' },
          { q: 'Quanto dura un impianto FV?', a: 'La maggior parte degli impianti ha una durata di 25 anni o più.' },
          { q: 'Un impianto solare necessita di manutenzione?', a: 'Sì. Controlli regolari assicurano massime prestazioni e rilevano i difetti in tempo.' },
          { q: 'Un impianto solare funziona anche in inverno?', a: 'Sì. Anche in inverno viene prodotta energia, ma con potenza minore rispetto all’estate.' },
          { q: 'Posso usare io stesso l’energia solare?', a: 'Sì. L’energia prodotta può essere usata direttamente nell’edificio o immessa in rete.' },
        ],
      },
      {
        title: 'Tecnica edile generale',
        items: [
          { q: 'Cosa comprende la tecnica edile?', a: 'Comprende climatizzazione, ventilazione, riscaldamento, sanitario, solare e altri impianti tecnici.' },
          { q: 'Perché è importante un service regolare?', a: 'Un service regolare aumenta la durata, riduce i guasti e migliora l’efficienza energetica.' },
          { q: 'Offrite controlli e perizie?', a: 'Sì. Eseguiamo controlli, analisi e perizie tecniche professionali.' },
          { q: 'Lavorate anche per ristoranti e aziende?', a: 'Sì. Serviamo privati, ristorazione, uffici e aziende.' },
          { q: 'Create soluzioni individuali per edifici?', a: 'Sì. Ogni impianto e immobile viene analizzato e progettato individualmente.' },
          { q: 'In quanto tempo si può fissare un appuntamento?', a: 'A seconda del carico e della regione, appuntamenti a breve termine sono spesso possibili.' },
        ],
      },
    ],
  },
};

export default it;
