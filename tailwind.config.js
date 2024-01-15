/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-image':"url('../public/bgImage.jpg')",
      },
      colors: {
        'off-white': '#F3F3F3',
      }
    },
  },
  plugins: [],
}
