/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        green: "#1B5B31",
        beige: "#DCC1AB",
        lightBeige: "#F5F0EC"
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '650px'},
    }
  },
  plugins: [],
}

