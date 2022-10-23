/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["InterVar", "Inter", "Helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        midnight: "#060B12",
        white: "#f8f8ff",
        gray: colors.slate,
      },
      aspectRatio: {
        golden: "1 / 1.618",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
