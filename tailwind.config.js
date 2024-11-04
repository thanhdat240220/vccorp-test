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
        textCustom: {
          DEFAULT: '#FFDE05'
        }
      },
    },
  },
  plugins: [],
}

