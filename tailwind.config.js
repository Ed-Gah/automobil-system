/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          P25: "#F4F4F9",
          P50: "#F1F1F4",
          P75: "#EDECF9",
          P100: "#D9D6F5",
          P150: "#C2BDF5",
          P200: "#AEA8F0",
          P300: "#7F75F0",
          P400: "#4C3DF5",
          P500: "#E10202",
          P600: "#190AC2",
          P700: "##190F8A",
          P800: "#150F57",
          P900: "#0F0D26",
        },
        grey: {
          W0: "#FFFFFF",
          W50: "#FBFAFA",
          W75: "#EDE9E9",
          W100: "#E6E0E0",
          W200: "#DBD3D3",
          W300: "#BFB6B6",
          W400: "#948D8D",
          W500: "#817B7B",
          W700: "#4E4B4B",
          W800: "#343232",
          W900: "#1A1919",
        },
        secondary: {
          S500: "#DEFF98",
          S700: "#81994D",
        },
      },
    },
  },
  plugins: [],
};
