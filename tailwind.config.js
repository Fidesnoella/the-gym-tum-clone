/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
        RobotoItalic:['RobotoItalic', 'sans-serif'],
        RobotoBold:['RobotoBold', 'sans-serif'],
      },
      colors: {
        primary: '#072140',
        secondary: '#0a2d57',
        skyBlue: '#3070b3',
        purple: '#8f81ea',
        yellow: '#f7b11e',
        orange: '#b55ca5',
        lightGray: '#efedfc',
        stone: '#ea7237',
      },
      padding: {
        "33": "8.3125rem",
      },
      letterSpacing: {
        thin: "0.0125rem",
      }
    },
  },
  plugins: [],
}
