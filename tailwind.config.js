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
          P400: "#4C3DF5",
          P500: "#E10202",
        },
        grey: {
          W0: "#FFFFFF",
          W50: "#FBFAFA",
          W75: "#EDE9E9",
          W100: "#E6E0E0",
          W200: "#DBD3D3",
        },
      },
    },
  },
  plugins: [],
};
