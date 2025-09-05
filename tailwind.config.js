/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0284c7",
          light: "#7dd3fc"
        }
      }
    },
  },
  plugins: [],
};
