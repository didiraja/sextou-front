/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{pcss,js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      skew: {
        10: "10deg",
      },
    },
  },
  plugins: [],
};
