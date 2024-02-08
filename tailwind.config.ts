/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: '#ffede0',
          400: '#ff7d1a',
        },
        secondary: {
          50: '#f7f8fd',
          400: '#b6bcc8',
          700: '#68707d',
          900: '#1d2025',
        },
      },
      fontFamily: {
        'sans': ['"Kumbh Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

