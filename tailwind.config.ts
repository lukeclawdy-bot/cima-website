import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cima: {
          red: '#E31937',
          gold: '#D4AF37',
          green: '#1B5E20',
          black: '#0A0A0A',
          cream: '#FFFEF0',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

export default config
