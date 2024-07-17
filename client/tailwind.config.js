/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-bg-color": "#EBCC7D",
        "secondary-bg-color" : "#FFFBEC",
        "terciary-bg-color" : "#74A285",
        "dark-color" : "#353535",
        "light-color" : "#F5F5F5",
        "green-light-color" : "#D9D9D9",
        "green-middle-color" : "#C7C7C7",
        "green-dark-color" : "#AEAEAE",
      },
      fontFamily: {
        "font-telecommande" : ['PressStart2P'],
        "font-logo" : ['Poppins']

      },
      boxShadow: {
        "buttonShad": 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      }
    },
  },
  plugins: [],
}