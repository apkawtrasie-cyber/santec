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
    title: 'Two competencies.\nOne standard.',
    subtitle:
      'Santec Group stands for professional renovation and forward-looking building technology. Safe. Clean. Sustainable.',
    ctaSanierung: 'Renovation',
    ctaGebaeudetechnik: 'Building Technology',
  },
  sanierung: {
    eyebrow: 'Renovation',
    title: 'Safety\ncomes first.',
    text: 'We are your specialist for professional asbestos and pollutant remediation. Reliable, certified and with utmost care.',
    items: ['Asbestos removal', 'Pollutant removal', 'Demolition', 'Disposal'],
    cta: 'Learn more',
  },
  gebaeudetechnik: {
    eyebrow: 'Building Technology',
    title: 'Technology for\nthe future.',
    text: 'We plan and deliver modern building technology focused on energy efficiency, sustainability and innovation.',
    items: ['Heating', 'Ventilation', 'Sanitary', 'Energy solutions'],
    cta: 'Learn more',
  },
  ueberUns: {
    eyebrow: 'About us',
    title: 'Experience.\nQuality.\nResponsibility.',
    text: 'Santec Group combines expertise, experience and passion for safe renovations and modern building technology.',
    stats: [
      { value: '20+', label: 'Years of experience' },
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
    tagline: 'Two competencies. One standard.\nSafe. Clean. Sustainable.',
    navigation: 'Navigation',
    kontakt: 'Contact',
    rights: 'All rights reserved.',
    impressum: 'Imprint',
    datenschutz: 'Privacy',
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
};

export default en;
