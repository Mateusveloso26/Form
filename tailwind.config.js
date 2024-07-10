/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
    },
    backgroundImage: {
      funndoImg: "url('/src/assets/images/bg.svg')",
    },
  },
  plugins: [],
}

