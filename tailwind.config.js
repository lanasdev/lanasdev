/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
    },
    extend: {
      backgroundImage: {
        "pattern-white": "url('/img/pattern-white.svg')",
      },
      colors: {
        midnight: "#060B12",
        whiteish: "#f8f8ff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")],
};
