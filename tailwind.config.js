/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text1: '#FFFFFF',
        textH1: '#383838',
        crm1: '#FED29C',
        gr1: '#EAEAEA',
      }
    },
  },
  plugins: [],
}

