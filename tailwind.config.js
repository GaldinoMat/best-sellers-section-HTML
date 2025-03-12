/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./*.{html,js}", "./src/*.js"],
  theme: {
    screens: {
      xxs: "375px",
      xs: "556px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "2560px",
    },
    extend: {
      fontFamily: {
        "best-seller": ["Bebas Neue"],
        "best-seller-price": ["Poppins"],
        "best-seller-title": ["'Source Serif 4'"],
      },
    },
  },
};
