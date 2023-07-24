/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'inputw': '800px',
        'buttonw': '180px'
      }
    },
  },
  plugins: [],
}