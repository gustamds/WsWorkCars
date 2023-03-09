/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      '16' : '16rem',
    },
    maxHeight: {
      '16' : '16rem',
    },
    minWidth: {
      '24' : '24rem',
    },
    maxWidth: {
      '24' : '24rem',
    },
    extend: {
      gridTemplateColumns: {
        'autofill': ' repeat(auto-fill, minmax(30%, 1fr))',
      }
    },
  },
  plugins: [],
}