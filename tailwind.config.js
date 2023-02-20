/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--nunito-font)', "sans-serif"],
        nunito_sans: ['var(--nunito-sans-font)', "sans-serif"],
      },
      colors: {
        darkBlack: "#1E1E1E",
        primary: "#292524",
        fields: "#1C1917",
        gold: "#CA8A04",
        muted: "#78716C",
        lightWhite: "#F2F2F1",
      }
    },
    plugins: [],
  }
}