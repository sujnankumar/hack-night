/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: "rgb(170, 116, 251)",
        purple: "rgb(145,71,255)",
        darkPurple: "rgb(104, 31, 212)",
        lightWhite: "#d7d7d7",
        darkGray: "#3d3d3dcf",
        darkBlack: "#0D0D0F",
      },
    },
  },
  plugins: [],
};
