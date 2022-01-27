module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito Sans"],
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
  plugins: [],
};
