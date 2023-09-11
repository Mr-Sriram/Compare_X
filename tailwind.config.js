/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cxOrange: "#ff3620",
        cxBlack: "#0c0c0c",
        cxWhite: "#f8f5f4",
        cxBg: "#f7f5f4",
        cxGreen: "#019e6c",
        cxTextPri: "#171f39",
        cxTextSec: "#1b233c",
        cxPlaceholder: "#bbc0c9",
        cxChatbotGrey: "#d3d8e4",
      },
    },
    screens: {
      smallScreen: "200px",
      phonescreen: "300px",
      tablet: "700px",
      laptop: "1000px",
    },
  },
  plugins: [],
};
