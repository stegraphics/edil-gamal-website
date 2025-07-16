/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        numbers: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
