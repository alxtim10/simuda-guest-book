/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/public/bg.png')",
      },
      colors: {
        "dark-gray": "#191919",
        "light-cream": "#E7E9BB",
      },
    },
    fontFamily: {
      hubballi: ["Hubballi", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("flowbite/plugin")],
};
