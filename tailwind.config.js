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
      } , 
      screens : {
        'lg' : '1000px' , 
        'md' : '700px' , 
      } , 
      boxShadow : {
        'tabel' : '0 0 0 .05rem black' , 
      }
    },
  },
  plugins: [],
}
