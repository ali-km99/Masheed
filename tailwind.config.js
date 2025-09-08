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
        home: "url('https://i.postimg.cc/J7FFQBGV/img8-1.webp')",
        homeSM: "url('https://i.postimg.cc/nLnSL4w7/img8sm-1.webp')",
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
