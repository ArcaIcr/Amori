/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          light: '#E0BBE4',
          DEFAULT: '#C8A2C8',
          dark: '#7E5A9B',
        },
        violet: {
          light: '#D8BFD8',
          DEFAULT: '#8A2BE2',
          dark: '#4B0082',
        },
        fuchsia: {
          light: '#FF77FF',
          DEFAULT: '#FF00FF',
          dark: '#C71585',
        },
        lavender: {
          light: '#E6E6FA',
          DEFAULT: '#C8A2C8',
          dark: '#9370DB',
        },
        purple: {
          light: '#D8BFD8',
          DEFAULT: '#8A2BE2',
          dark: '#4B0082',
        },
        pink: {
          light: '#FFB6C1',
          DEFAULT: '#FF69B4',
          dark: '#FF1493',
        },
        primary: {
          light: '#F9A8D4', // pink-300
          DEFAULT: '#EC4899', // pink-500
          dark: '#BE185D', // pink-700
        },
        secondary: {
          light: '#A78BFA', // purple-400
          DEFAULT: '#8B5CF6', // purple-500
          dark: '#6D28D9', // purple-700
        },
        background: '#FDF2F8', // pink-50
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          serif: ['Playfair Display', 'Georgia', 'serif'],
          cursive: ['"Creattion Demo by GlyphStyle"', 'cursive'],
        },
        animation: {
          'heart-beat': 'heartBeat 1.3s ease-in-out infinite',
          'float': 'floating 3s ease-in-out infinite',
        },
        keyframes: {
          heartBeat: {
            '0%': { transform: 'scale(1)' },
            '14%': { transform: 'scale(1.3)' },
            '28%': { transform: 'scale(1)' },
            '42%': { transform: 'scale(1.3)' },
            '70%': { transform: 'scale(1)' },
          },
          floating: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
  },
  plugins: [],
}