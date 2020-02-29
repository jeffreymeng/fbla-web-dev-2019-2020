const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    // extend: {
    //   fontFamily: {
    //     sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    //   },
    // },
    fontSize: {
      "xs": ".75rem",
      "sm": ".875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "10xl": "8rem",
      "12xl": "10rem"
    },
    zIndex: {
      '-10': '-10',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': "50",
      'auto': 'auto',
    }
  },
  variants: {
     margin: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require("@tailwindcss/ui"),
  ],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Inter var', ...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  // plugins: [
  //   require('@tailwindcss/ui'),
  // ]
}