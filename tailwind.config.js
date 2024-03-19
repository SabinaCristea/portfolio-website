/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.267)",
        roundBtn: "0.2rem 0.5rem 0 rgb(0, 0, 0, 0.3)",
        roundBtnHover: "0.4rem 0.6rem 0 rgb(0, 0, 0 , 0.5)",
      },
      boxShadow: {
        modal: "0.2rem 0.2rem 2rem rgba(0, 0, 0, 0.267)",
      },
    },
  },
  plugins: [],
};
