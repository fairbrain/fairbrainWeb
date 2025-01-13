/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        mont: ["Montserrat", "serif"]
      },
      colors:{
        dark: "#141a1a",
        lightDark: "#242b2b",
        primary: "#ff5500",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}

