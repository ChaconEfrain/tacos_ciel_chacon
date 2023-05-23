/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwindcss-animated")],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#e7f0f2",
          medium: "#88b6be",
          dark: "#293739",
          darkest: "#0e1213",
        },
        secondary: {
          light: "#fff1f3",
          medium: "#ff7588",
          dark: "#b3525f",
          darkest: "#190c0e",
        },
      },
      fontFamily: {
        alegreya: ["var(--font-alegreya)", "sans-serif"],
      },
    },
  },
};
