/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cormorant-garamond)"],
        script: ["var(--font-imperial-script)"],
        poppins: ["var(--font-poppins)"],
      },
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
  plugins: [heroui()],
};
