/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:  ['Inter', 'sans-serif'],
      },
      colors: {
        mainBg: '#d9f2b4',
        bgNav: '#363946',
        text: '#ddd',
        yellow: '#ffee88',
        blue: '#41bdd9'
      },
    },
  },
  plugins: [],
}
