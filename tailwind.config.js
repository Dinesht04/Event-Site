/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Rammetto: ['Rammetto\\ One',"sans-serif"],
        Poppins: ["Poppins","sans-serif"],
      },
    },
  },
  plugins: [],
}

