/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F40404",
        para: "#6C6C6C",
        yellowborder: "#FFB800",
        afterborder: "#5C6A92",
        darkLight: "rgba(0,0,0,.6)",
        companybg: "#F0F0F0",
        footerbg: "#1F1F1F",
      },
      maxWidth: {
        container: "1144px",
      },
      screens: {
        sm: "375px",

        sml: "667px",

        md: "768px",
      },
    },
  },
};
