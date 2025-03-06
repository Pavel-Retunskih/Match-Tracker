/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tactic: ['Tactic_Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          bg: '#06080C',
          card: '#0B0E12',
        }
      },
      fontSize: {
        m: '16px',
        s: '14px',
        l: '20px',
        xl: '32px',
      },
      animation: {
        'spin-reverse': 'spin-reverse 1s linear infinite',
        rotating: 'rotating 1s ease-in',
      },
      keyframes: {
        'spin-reverse': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'},
        },
        rotating: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(180deg)'},
        },
      },
    },
  },
  plugins: [],
}

