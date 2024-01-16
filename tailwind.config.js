/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Playfair : "Playfair"
      },
      colors : {
        mainBlue : "#0078ff"
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024',
      'xxl': '1228',
    }
  },
  plugins: [],
}