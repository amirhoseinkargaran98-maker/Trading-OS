/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        dark: {
          50:  '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#adb5bd',
          400: '#6c757d',
          500: '#495057',
          600: '#343a40',
          700: '#212529',
          800: '#161b22',
          900: '#0d1117',
          950: '#090c12',
        },
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        danger: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        warning: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
      fontFamily: {
        persian: ['Vazirmatn', 'Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'gold': '0 0 20px rgba(245, 158, 11, 0.15)',
        'glow-green': '0 0 15px rgba(34, 197, 94, 0.2)',
        'glow-red': '0 0 15px rgba(239, 68, 68, 0.2)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #f59e0b, #d97706)',
        'gradient-dark': 'linear-gradient(135deg, #161b22, #0d1117)',
      },
      keyframes: {
        'ticker-scroll': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
      animation: {
        'ticker-scroll': 'ticker-scroll 42s linear infinite',
        'ticker-scroll-slow': 'ticker-scroll 58s linear infinite',
      },
    },
  },
  plugins: [],
};
