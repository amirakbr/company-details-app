/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#20486A' , 
        'secondary' : '#6c6f75'
      }
    },
  },
  plugins: [],
}
