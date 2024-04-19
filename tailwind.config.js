import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      'xs': '450px',
    ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
      'poppins': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'grypen': ['"Qwitcher Grypen"', 'cursive'],
      'roboto': [ 'Roboto', 'sans-serif'],

      // Add any other custom font families here
    },
    boxShadow: {
      'custom': '0px 4px 4px 0px #00000040',
      'custom2': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      'custom3': '0px 0px 11px 0px #00000040',
    },
  },
  plugins: [
    //  flowbite.plugin(),
  ],
};

