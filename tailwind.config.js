/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1b1b1e",
        silver_light: "#efeff1",
        silver_light_2: "#e2e2e3",
        silver_light_3: "#d0d0d0",
        silver: "#c7c7c7",
        gray: "#373737",
        red: "#ff4d4f",
        green: "#529e72",
        blue: "#5e87c9",
        blue_light: "#258ddb",
        brown: "#ba856f",
        orange: "#FE7211",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
};
