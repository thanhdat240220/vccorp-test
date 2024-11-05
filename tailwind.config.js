/** @type {import('tailwindcss').Config} */
// background color: #389df9
// 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: '#389df9', // default shade
          light: '#56faff',    // light blue
          primary: '#2b79d8',  // primary blue
          dark: '#1f54b6',     // dark blue
          accent: '#41bafc',   // accent blue
        },
        shapeColors: {
          DEFAULT: '#35b0f8',
          dark: '#032184',
          light: '#07F9FE',
        },
        bottomShape: {
          DEFAULT: '#0278d5'
        },
        textCustom: {
          DEFAULT: '#FFDE05' // yellow
        }
      },
    },
  },
  plugins: [],
}

