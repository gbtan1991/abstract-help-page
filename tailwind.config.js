/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-accent': '#4C5FD5',
        'theme-neutral': '#dadbf1',
        'theme-black': '#191a1b',
        'theme-white': '#ffffff',
      },
      fontFamily: {
        'theme-lato': 'Lato, sans-serif',
        'theme-GT-American' : 'GT-American-Standard, san-serif'
      }
    },
  },
  plugins: [],
}