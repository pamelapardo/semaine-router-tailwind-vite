/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'choco': '#765C40',
      'brown': '#8D7B68',
      'coffee': '#A4907C',
      'latte': '#C8B6A6',
      'cream': '#F1DEC9',
      'milk': '#F6EEE9',
      'white': '#FFFFFF',
      'transparent': '#a4907cca',
      'modalbg': '#8d7b688a'
    },
    extend: {
      fontFamily: {
        'title': ['DM Serif Display', 'serif'],
        'paragraph': ['Raleway','sans-serif']
      },
    },
  },
  plugins: [],
}