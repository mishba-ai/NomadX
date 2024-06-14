/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
      },
      fontFamily: {
        Gagalin: ["Gagalin-Regular"],
        montserrat: ["Montserrat","sans-serif"],
      },
      backgroundImage: {
        'nomadni8': "url('./src/assets/nomadni8.png')",
        'map':"url('./src/assets/map.png')"
      },
    },
  },
  plugins: [],
};
