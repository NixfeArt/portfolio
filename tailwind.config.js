/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff0000'
      },
      width: {

      },
      spacing: {

      },
      borderRadius: {

      },
      fontFamily: {
        roboto400: ['var(--font-roboto400)', 'sans-serif'],
        roboto500: ['var(--font-roboto500)', 'sans-serif'],
        roboto700: ['var(--font-roboto700)', 'sans-serif'],
        roboto900: ['var(--font-roboto900)', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}