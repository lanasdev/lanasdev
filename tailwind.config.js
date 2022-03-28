module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["Inter", 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
    },
    extend: {
      backgroundImage: {
        'pattern-white': "url('/img/pattern-white.svg')",
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
