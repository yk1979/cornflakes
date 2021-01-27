// eslint-disable-next-line
const colors = require("tailwindcss/colors");

module.exports = {
  sourceType: "module",
  purge: [".src/pages/**/*.tsx", ".src/components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blueGray[900],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
