/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
