/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBtn': '#344565'
      },
      backgroundColor: {
        'bg-primaryBtn': '#344565'
      }
    },
  },
  plugins: [],
}
