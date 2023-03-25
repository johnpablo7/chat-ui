/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shark: {
          300: "#22222a",
          500: "#1e1f24",
          700: "#141517",
        },
      },
    },
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
