/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkDesaturatedBlue: " hsl(244, 38%, 16%)",
        softViolet: " hsl(277, 64%, 61%)",
        white: "hsl(0, 0%, 100%)",
        transparentWhite060: "hsla(0, 0%, 100%, 0.6)",
        transparentWhite075: "hsla(0, 0%, 100%, 0.75)",
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        LexendDeca : ['Lexend Deca', 'sans-serif','Bold 700', 'Regular 400']
      }
    },
  },
  plugins: [],
};
