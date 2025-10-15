/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
extend: {
      fontFamily: {
        koulen: ['Koulen', 'sans-serif'], // Define Koulen font
        dmserif: ['DM Serif Display', 'serif'],
        bbh: ['BBH Sans Hegarty', 'sans-serif'], // BBH Sans Hegarty font
        gloock: ['Gloock', 'serif'], // Gloock font
      },
      keyframes: {
        'pulse-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        'pulse-horizontal': 'pulse-horizontal 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [typography], // Include the plugin here
}

