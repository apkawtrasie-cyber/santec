import type { Dictionary } from '../types';

const en: Dictionary = {
  nav: {
    home: 'Home',
    sanierung: 'Renovation',
    gebaeudetechnik: 'Building Technology',
    ueberUns: 'About us',
    kontakt: 'Contact',
    anfrage: 'Enquiry',
  },
  hero: {
    title: 'Building Technology &\nRenovation Switzerland',
    subtitle:
      'Santec Group stands for professional renovation and forward-looking building technology. Safe. Clean. Sustainable.',
    ctaSanierung: 'Asbestos Remediation',
    ctaGebaeudetechnik: 'Building Technology',
  },
  sanierung: {
    eyebrow: 'Asbestos & Pollutant Remediation',
    title: 'Safety\ncomes first.',
    text: 'We are your specialist for professional asbestos and pollutant remediation. Reliable, certified and with utmost care.',
    items: ['Asbestos removal', 'Pollutant removal', 'Demolition', 'Disposal'],
    cta: 'Learn more',
  },
  gebaeudetechnik: {
    eyebrow: 'Building Technology',
    title: 'Technology for\nthe future.',
    text: 'As independent experts and HVAC engineers we plan, optimise and monitor your systems – fault-free, energy-efficient and at minimal operating costs.',
    items: [
      { title: 'Ventilation & Climate', desc: 'Ventilation, climate and refrigeration systems for residential, commercial and industrial buildings.' },
      { title: 'Heating', desc: 'Heat pumps, district heating, pellet boilers and hydraulic balancing – manufacturer-independent.' },
      { title: 'Solar & Photovoltaics', desc: 'High-efficiency PV systems, battery storage solutions and e-mobility (wallboxes).' },
      { title: 'Sanitary', desc: 'Hygienic drinking-water installations, drainage systems and Legionella testing.' },
      { title: 'Service', desc: 'Maintenance, cleaning and service for climate, ventilation, heating and sanitary systems – reliable and predictable.' },
    ],
    infoBtn: 'More info',
    cta: 'Learn more',
  },
  ueberUns: {
    eyebrow: 'About us',
    title: 'Experience.\nQuality.\nResponsibility.',
    text: 'Santec Group combines expertise, experience and passion for safe renovations and modern building technology.',
    stats: [
      { value: '30+', label: 'Years of experience' },
      { value: '1000+', label: 'Projects delivered' },
      { value: '50+', label: 'Specialists in the team' },
      { value: '100%', label: 'Customer satisfaction' },
    ],
    badges: 'Certified. Safe. Reliable.',
  },
  prozess: {
    eyebrow: 'Process',
    title: 'Our process.\nYour advantage.',
    text: 'Structured. Transparent. Reliable.',
    steps: [
      { n: '01', title: 'Consulting', text: 'We analyse your needs and advise you competently.' },
      { n: '02', title: 'Planning', text: 'We develop a tailor-made concept for your project.' },
      { n: '03', title: 'Execution', text: 'Our team executes your project efficiently and safely.' },
      { n: '04', title: 'Handover', text: 'We hand over the finished project and stay there for you.' },
    ],
    cta: 'Start an enquiry',
  },
  kontakt: {
    eyebrow: 'Contact',
    title: 'We are here\nfor you.',
    text: 'Do you have questions or would you like to discuss a project? Get in touch – we look forward to your enquiry.',
    form: {
      name: 'Name',
      email: 'E-mail',
      message: 'Message',
      send: 'Send enquiry',
      success: 'Thank you! We will get back to you shortly.',
      error: 'Failed to send. Please try again.',
    },
  },
  footer: {
    tagline: 'Two competencies. One quality standard.\nSafe. Clean. Sustainable.',
    navigation: 'Navigation',
    kontakt: 'Contact',
    rights: 'All rights reserved.',
    impressum: 'Imprint',
    datenschutz: 'Privacy',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions.',
    text: 'Answers to the most important questions about climate, ventilation, heating, sanitary, solar systems and general building technology.',
    groups: [
      {
        title: 'Air conditioning',
        items: [
          { q: 'How often should an AC unit be serviced?', a: 'We recommend at least one service per year. For restaurants, offices or heavily used systems, regular checks are particularly important.' },
          { q: 'Why does my AC smell unpleasant?', a: 'Often dirty filters, bacteria or moisture are the cause. Professional cleaning improves air quality and hygiene.' },
          { q: 'Can I also heat with an AC unit?', a: 'Yes. Modern climate systems and heat pumps can cool and heat efficiently.' },
          { q: 'Why is my AC not cooling properly anymore?', a: 'Possible causes are dirty filters, refrigerant loss or technical defects.' },
          { q: 'How long does an AC unit last?', a: 'Depending on use and maintenance, lifespan is typically 10 to 15 years.' },
        ],
      },
      {
        title: 'Ventilation & Air Quality',
        items: [
          { q: 'Why is clean ventilation important?', a: 'Clean ventilation ensures hygienic air, fewer odours and more efficient operation.' },
          { q: 'How do I recognise dirty ventilation?', a: 'Typical signs are bad odours, low airflow, dust or loud noises.' },
          { q: 'How often should ventilation be checked?', a: 'Especially in restaurants and commercial premises, regular checks and maintenance are recommended.' },
          { q: 'Does dirty ventilation increase electricity costs?', a: 'Yes. Dirty systems require more power and consume more energy.' },
        ],
      },
      {
        title: 'Heating & Heat Pumps',
        items: [
          { q: 'When should heating be serviced?', a: 'Ideally once a year before the heating season.' },
          { q: 'What are the benefits of a heat pump?', a: 'Heat pumps work energy-efficiently, sustainably and can also cool depending on the system.' },
          { q: 'Why is my heating not warm enough?', a: 'Possible causes are air in the system, pressure loss or technical problems.' },
          { q: 'Is replacing an old heating system worthwhile?', a: 'In many cases yes, as modern systems work more efficiently and economically.' },
        ],
      },
      {
        title: 'Sanitary',
        items: [
          { q: 'What to do about a dripping tap?', a: 'Even small leaks should be fixed quickly to avoid water loss and consequential damage.' },
          { q: 'Why does water pressure fluctuate?', a: 'Possible causes are limescale, defective fittings or pipe problems.' },
          { q: 'How do I recognise a leaking pipe?', a: 'Damp spots, water stains, mould or unusually high water consumption can be indications.' },
          { q: 'How often should sanitary systems be checked?', a: 'Regular checks help detect damage early and avoid costly repairs.' },
          { q: 'Do you also offer bathroom and sanitary renovations?', a: 'Yes. We support modernisation, repairs and individual sanitary solutions.' },
        ],
      },
      {
        title: 'Solar & Photovoltaics',
        items: [
          { q: 'Is a solar system still worth it today?', a: 'Yes. Solar systems help reduce energy costs long-term and increase independence from the electricity market.' },
          { q: 'How long does a PV system last?', a: 'Most systems have a lifespan of 25 years or more.' },
          { q: 'Does a solar system need maintenance?', a: 'Yes. Regular checks ensure maximum performance and detect defects early.' },
          { q: 'Does a solar system work in winter?', a: 'Yes. Electricity is also produced in winter, but with lower output than in summer.' },
          { q: 'Can I use the solar power myself?', a: 'Yes. The electricity produced can be used directly in the building or fed into the grid.' },
        ],
      },
      {
        title: 'Building Technology General',
        items: [
          { q: 'What does building technology include?', a: 'Building technology includes climate, ventilation, heating, sanitary, solar and other technical building systems.' },
          { q: 'Why is regular service important?', a: 'Regular service increases system lifespan, reduces faults and improves energy efficiency.' },
          { q: 'Do you also offer inspections and expert reports?', a: 'Yes. We carry out professional inspections, analyses and technical expert reports.' },
          { q: 'Do you also work for restaurants and businesses?', a: 'Yes. We serve private customers, restaurants, offices and commercial businesses.' },
          { q: 'Do you create individual building solutions?', a: 'Yes. Every system and property is analysed and planned individually.' },
          { q: 'How quickly can an appointment be arranged?', a: 'Depending on workload and region, short-notice appointments are often possible.' },
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie settings',
    description:
      'We use cookies to provide you with the best possible experience on our website.',
    acceptAll: 'Accept all',
    rejectAll: 'Decline',
    tableHeader: {
      name: 'Name',
      purpose: 'Purpose',
      duration: 'Duration',
    },
  },
  whatsapp: {
    header: 'Customer Service',
    subheader: 'We usually reply within a few minutes',
    greeting: 'Hello! 👋 How can I help you? Send us a message and we\'ll get back to you as soon as possible.',
    placeholder: 'Write a message…',
    startChat: 'Start chat',
  },
};

export default en;
