module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Helvetica'],
      'handwriting': ['Shadows Into Light']
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
