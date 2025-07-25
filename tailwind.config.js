/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      amatic: ["'Amatic SC'", "cursive"],
      raleway: ["'Raleway'", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      darkBeige: "#2D190E",
      beige: "#8B765C",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#2d3748",
      white: "#fff",
    },
    extend: {
      dropShadow: {
        text: "1px 1px 4px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
