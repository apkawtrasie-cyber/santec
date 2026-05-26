import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0F0E',
          soft: '#111614',
        },
        brand: {
          red: '#B3261E',
          'red-dark': '#7A0F0A',
          green: '#2E7D32',
          'green-dark': '#0F3A14',
          line: '#1F2A26',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', md: '2rem', lg: '3rem' },
        screens: { '2xl': '1280px' },
      },
    },
  },
  plugins: [],
};

export default config;
