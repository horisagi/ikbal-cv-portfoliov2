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
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf5',
          200: '#c5dcee',
          300: '#9bc4e4',
          400: '#6aa6d7',
          500: '#478ac9',
          600: '#346fae',
          700: '#2c598d',
          800: '#274b74',
          900: '#0B1730',
          950: '#070f20',
        },
        accent: {
          light: '#e0f2fe',
          DEFAULT: '#38bdf8',
          hover: '#0284c7',
          dark: '#0369a1',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 23, 48, 0.05)',
        'card': '0 10px 30px -5px rgba(11, 23, 48, 0.08)',
        'hover': '0 20px 40px -8px rgba(11, 23, 48, 0.12)',
        'glow': '0 0 25px -5px rgba(56, 189, 248, 0.35)',
      }
    },
  },
  plugins: [],
}

