/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
      },
      colors: { brownRgb: 'rgba(164,145,145)',
                door: 'rgba(145, 41, 18, 0.67)'
    },
    },
  },
  plugins: [],
};
