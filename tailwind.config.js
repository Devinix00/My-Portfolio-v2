/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1b1b1e",
        silver: "#c7c7c7",
        gray: "#373737",
        red: "#ff4d4f",
      },
    },
  },
  plugins: [],
};
