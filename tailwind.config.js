/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBeige: "#2D190E",
        beige: "#8B765C",
        backgroundBeige: "#E5E0D5", // ✅ fixed typo
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        black: "#2d3748",
        white: "#fff",
        orange: "#4D2912",
        eggshell: "#B8A5A1",
      },
    },
  },
  plugins: [],
};
