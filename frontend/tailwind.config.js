/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5f6FFF',
        'secondary': '#ffffff',
        'tertiary': '#f5f5f5',
        'quaternary': '#e0e0e0',
        'quinary': '#bdbdbd',
      },
    },
  },
  plugins: [],
}