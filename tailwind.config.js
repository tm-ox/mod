/** @type {import('tailwindcss').Config} */

const colors = {
  background: "#e9e1de",
  primary: "#0A0B0B",
  secondary: "#3A3A40",
  nav: "#e9e1de",
  headings: "#fe3488",
  text: "#1D2020",
  logowhite: "#e9e1de",
  offblack: "#1D2020",
  darkprimary: "#D85AD8",
  lightprimary: "#C62FC6",
};

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        body: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
