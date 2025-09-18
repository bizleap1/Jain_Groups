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
  DEFAULT: "#6fbf73", // green tone
  dark: "#4caf50",
  light: "#a5d6a7"
},
        // Fresh & Natural Green Tones
        sage: {
          50: '#f5f7f5',
          100: '#e5eae5',
          200: '#c8d3c8',
          300: '#a1b3a1',
          400: '#738c73',
          500: '#587058',
          600: '#445a45',
          700: '#384938',
          800: '#2f3b2f',
          900: '#293229',
        },
        olive: {
          50: '#f7f7f3',
          100: '#ebebde',
          200: '#d6d7bf',
          300: '#b8ba95',
          400: '#969a70',
          500: '#787d52',
          600: '#5e6340',
          700: '#4a4e33',
          800: '#3d402c',
          900: '#353827',
        },
        forest: {
          50: '#f4f6f4',
          100: '#e3e9e3',
          200: '#c6d2c6',
          300: '#9db29d',
          400: '#6f8a6f',
          500: '#516c51',
          600: '#3f563f',
          700: '#344634',
          800: '#2d3a2d',
          900: '#263126',
        },
      },
    },
  },
  plugins: [],
};