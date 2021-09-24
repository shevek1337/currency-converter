/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
