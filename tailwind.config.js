/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'melt-pattern': "url('./src/assets/melt.svg')"
      },
      fontFamily: {
        'alumni-sans': ['Alumni Sans'],
        'caveat': ['Caveat'],
        'roboto': ['Roboto']
      },
      listStyleImage: {
        checkmark: 'url("./src/assets/check.svg")',
      },
    },
  },
  plugins: [],
}

