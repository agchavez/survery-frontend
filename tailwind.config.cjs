/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
        secondary: "#FF6347",
        tertiary: "#FFD700",
      }
    },
  },
  plugins: [],
}
