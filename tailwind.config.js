module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ".512rem",
      sm: ".64rem",
      tiny: ".8rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.563rem",
      "2xl": "1.953rem",
      "3xl": "2.441rem",
      "4xl": "3.052rem",
      "5xl": "3.815rem",
      "6xl": "4.768rem",
      "7xl": "5.96rem",
    },
    extend: {
      fontFamily: {
        now: ["Now", "sans-serif"],
      },
      colors: {
        "lipad-blue": "#263470",
        "lipad-green": "#21C463",
        "lipad-grey": "#737373",
        "lipad-orange": "#F2994A",
        "lipad-red": "#EB5757",
        "lipad-ghost-white": "#FBFBFE",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
