import { withTV } from "tailwind-variants/dist/transformer";

/** @type {import('tailwindcss').Config} */
export default withTV({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
          custom: "#0C1C46",
        },
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
      width: {
        "500px": "500px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".selection-transparent::selection": {
          backgroundColor: "transparent",
          color: "inherit",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
});
