/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 10s linear infinite", // Adjust the duration as needed
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        "off-white": "#F3F3F3",
        "black-bg": "#1A1A1E",
        "secondary-col": "#AAAAAA",
        "darker-grey": "#969696",
      },
    },
  },
  plugins: [],
};
