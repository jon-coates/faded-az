/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
      fontFamily: {
        koulen: ['Koulen', 'sans-serif'], // Define Koulen font
        dmserif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [typography], // Include the plugin here
}

