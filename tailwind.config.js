/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        "secondary-blue": "#377DFF",
        "secondary-green": "#38CB89",
        "secondary-orange": "#FFAB00",
        "secondary-red": "#FF5630",
        "neutral-700": "#141718",
        "neutral-600": "#232627",
        "neutral-500": "#343839",
        "neutral-400": "#6C7275",
        "neutral-300": "#E8ECEF",
        "neutral-200": "#F3F5F7",
        "neutral-100": "#FEFEFE",
      },
      backgroundImage: {
        hero: "url('./src/resources/images/livingroom.jpeg')",
      },
      backgroundSize: {
        "50%": "50%",
        "42%": "42%",
        16: "4rem",
      },
    },

    fontFamily: {
      Inter: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"clig" off, "liga" off',
          // fontVariationSettings: '"opsz" 32',
        },
      ],
      Poppins: [
        '"Poppins"',
        {
          fontFeatureSettings: '"clig" off, "liga" off',
          // fontVariationSettings: '"opsz" 32',
        },
      ],
      Space_Grotesk: [
        '"Space Grotesk"',
        {
          fontFeatureSettings: '"clig" off, "liga" off',
          // fontVariationSettings: '"opsz" 32',
        },
      ],
    },
  },
  plugins: [],
};
