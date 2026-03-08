/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"DM Serif Display"', 'Georgia', 'serif'],
        'display': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'warm': {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F0EB',
          300: '#EBE3DA',
          400: '#D9CFC3',
          500: '#C4B5A5',
          600: '#A89888',
          700: '#8B7A6B',
          800: '#6B5D50',
          900: '#4A3F35',
          950: '#2D2621',
        },
        'accent': {
          DEFAULT: '#C8956C',
          light: '#E0B794',
          dark: '#A87750',
          50: '#FBF5EF',
          100: '#F5E8DA',
          200: '#EACED0',
          300: '#E0B794',
          400: '#C8956C',
          500: '#B07D54',
          600: '#A87750',
          700: '#8B6142',
          800: '#6E4D35',
          900: '#573D2A',
        },
        'brand': {
          purple: '#7c3aed',
          pink: '#ec4899',
          blue: '#3b82f6',
          indigo: '#6366f1',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      boxShadow: {
        'soft': '0 2px 32px -8px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 48px -12px rgba(0, 0, 0, 0.1)',
        'glow-purple': '0 0 60px -12px rgba(124, 58, 237, 0.25)',
        'glow-pink': '0 0 60px -12px rgba(236, 72, 153, 0.25)',
      },
    },
  },
  plugins: [],
};
