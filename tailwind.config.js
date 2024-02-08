/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        toska: "#6d8c9c",
        cream: "#e3d4b5",
        blue: "#b2c0c5",
        putih: "#f7faf9",
        coklat: "#615d5a",
        utama: "#d66000",
      },
      fontFamily: {
        nova: ["Nova Mono", "monospace"],
        canga: ["Canga", "monospace"],
        fira: ["Fira Sans", "monospace"],
        inter: ["Inter", "sans-serif"],
        jos: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
