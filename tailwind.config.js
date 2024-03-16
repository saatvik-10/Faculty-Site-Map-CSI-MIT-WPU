/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
      },
      colors: {
        btn: 'rgba(209, 43, 47, 1)',
        brownRgb: 'rgba(164,145,145)',
        door: 'rgba(145, 41, 18, 0.67)',
        divs: 'rgb(255,255,255,0.5)',
        win: 'rgba(66, 25, 25, 0.71)',
        st1: 'rgba(50, 47, 47, 1)',
        st2: 'rgba(84, 82, 82, 1)',
        doorns: 'rgba(30, 22, 78, 0.71)',
        winns: 'rgba(106, 95, 235, 0.52)',
        class_bg: 'rgba(68, 99, 193)',
        staff_bg: 'rgba(226, 95, 98)',
      },
    },
  },
  plugins: [],
};
