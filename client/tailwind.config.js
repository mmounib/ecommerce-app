/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '5px 7px 5px -7px #000',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/blob.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'favorite': '#013220',
      },
    },
  },
  plugins: [],
};