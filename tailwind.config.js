/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake","nord"],
    
  },
  theme: {
    screens:{
      'sm':{'min':'150px','max':'250px'},
      'lg':{'min':'150px','max':'460px'}
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}