/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-gray-gradient":
          "linear-gradient(179.97deg, rgba(31, 41, 93, 0.192) 0.02%, rgba(0, 0, 0, 0.8) 99.98%, rgba(15, 17, 26, 0.6) 99.98%)",
        "bg-pink-gradient":
          "radial-gradient(circle,  #0F7BF4 5.21%, #BB63FF 50.54%, #FFFFFF 10%)",
      },
      colors: {
        colorBlack: "#060925",
        colorBlue: "#0F7BF4",
        colorPink: "#BB63FF",
      },

      fontFamily: {
        GilroyBold: ["Gilroy-Bold"],
        GilroyMedium: ["Gilroy-Medium"],
        GilroySemibold: ["Gilroy-Semibold"],
      },
    },
  },
  plugins: [],
};
