/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{html,js,ts,tsx}',
    './components/**/*.{html,js,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
