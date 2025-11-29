import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#10b981', // Primary brand color
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'emerald-glow': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
    }
  },
  plugins: []
};

export default config;
