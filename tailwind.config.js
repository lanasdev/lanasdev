/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
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
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(200px, 1fr))",
        autofitmd: "repeat(auto-fit, minmax(400px, 1fr))",
      },
      transform: {
        marqueeTransform: "translate3d(calc(-25% + 20vw), 0px, 0px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(calc(-25% + 20vw), 0px, 0px)" },
          "100%": { transform: "translate3d(calc(-100% + 20vw), 0px, 0px)" },
        },
      },
      animation: {
        slowpulse: "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 10s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
