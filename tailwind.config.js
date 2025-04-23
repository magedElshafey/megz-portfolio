/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Tajawal", "sans-serif"],
        english: ["Poppins", "sans-serif"],
      },
      colors: {
        mainColor: "#00c6f1",
        darkColor: "#141c3a",
        grayColor: "#f1f1f1",
      },
      boxShadow: {
        mainShadow: "0px 0px 60px #00000012",
      },
    },
  },
  plugins: [],
};
