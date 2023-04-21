/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#e7f0f2",
          medium: "#88b6be",
          dark: "#445b5f",
          darkest: "#0e1213",
        },
        secondary: {
          light: "#ffe3e7",
          medium: "#ff7588",
          dark: "#803b44",
          darkest: "#190c0e",
        },
      },
      fontFamily: {
        alegreya: ["var(--font-alegreya)", "sans-serif"],
      },
    },
  },
};
