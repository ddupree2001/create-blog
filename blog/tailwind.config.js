/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      fontFamily: {
        sans: ['Gilroy', 'sans-serif']
      },
      colors: {
        'vivid-cyan': 'hsl(194, 80%, 50%)',
      }
    },
  },
  plugins: [],
}
