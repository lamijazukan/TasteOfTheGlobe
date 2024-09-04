/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Cookie"],
        info: ["Rubik"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
