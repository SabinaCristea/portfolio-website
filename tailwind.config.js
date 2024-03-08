/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.267)",
      },
    },
  },
  plugins: [],
};
