/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        DEFAULT: "1210px",
      },
      padding: {
        DEFAULT: "20px",
      },
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
