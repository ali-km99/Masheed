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
        home: "url('https://i.postimg.cc/764rHrMP/img8.webp')",
        homeSM: "url('https://i.postimg.cc/L6w74Mmd/img8sm.webp')",
        products: "url('../assets/imgs/bg3.webp')",
      },
      colors: {
        primary: '#C50000', // Replace with your desired color
        secandry: '#FEEB00', // Replace with your desired color
        secandry_200: '#FEEB00', // Replace with your desired color
      },
    },
  },
  plugins: [],
}
