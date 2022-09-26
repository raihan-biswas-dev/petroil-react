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
      },
      maxWidth: {
        container: "1144px",
      },
    },
  },
};
