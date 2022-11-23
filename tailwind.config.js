const { FaceRetouchingNaturalSharp } = require('@mui/icons-material')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Berkshire_Swash" : ["Bershire_Swash", "cursive"],
        "Anton" : ["Anton","sans serif"],
      },
    },
  },
  plugins: [],
};
