/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF7',
          100: '#FFF8EE',
          200: '#F5ECDC',
          300: '#EADFCB',
          400: '#D5C4A6',
        },
        navy: {
          950: '#0B0E1B',
          900: '#12162A',
          850: '#171C33',
          800: '#1B2038',
          700: '#2A3254',
          deep: '#1B2238',
          muted: '#4A5568',
        },
        coral: {
          500: '#EA580C',
          600: '#B84F08',
          glow: '#FFA03C'
        },
        cyanAccent: '#38BDF8',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(234, 88, 12, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
