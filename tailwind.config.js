/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
      },
      colors: { brownRgb: 'rgba(164,145,145)',
                door: 'rgba(145, 41, 18, 0.67)',
                divs: 'rgb(255,255,255,0.5)',
                win: 'rgba(66, 25, 25, 0.71)',
                st1: 'rgba(50, 47, 47, 1)',
                st2: 'rgba(84, 82, 82, 1)'
    }
    },
  },
  plugins: [],
};
