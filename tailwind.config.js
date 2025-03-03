/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Tajawal: ['Tajawal'],
        cairo: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        home: "url('../assets/imgs/img8.jpg')",
        homeSM: "url('../assets/imgs/img8sm.jpg')",
        footer2: "url('../assets/footerBG2.png')",
        about: "url('../assets/AboutBG.png')",
      },
      colors: {
        primary: '#C50000', // Replace with your desired color
      },
    },
  },
  plugins: [],
}
