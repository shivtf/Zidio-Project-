/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'slow-spin': 'slow-spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}