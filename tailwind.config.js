/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'theme-accent': '#4C5FD5',
        'theme-neutral': '#dadbf1',
        'theme-white': '#FFFFFF',
        'theme-black' : '#000000'
      },
      fontFamily: {
        'theme-standard': ['GT America Standard', 'sans-serif'],
        'theme-black': ['GT America Standard Black', 'sans-serif'],
        'theme-medium': ['GT America Standard Medium', 'sans-serif'],
        'theme-bold': ['GT America Standard Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
