/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      // Add any other custom font families here
    },
    boxShadow: {
      'custom': '0px 4px 4px 0px #00000040',
    },
  },
  plugins: [],
};
