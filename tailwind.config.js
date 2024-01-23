/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "white-bg": "#efeefe",
        "grey-bg" : "#efeff2",
        "green-bg" : "#2eca7f",
        "light-green" : "#d3f2e4",
        "light-green2" : "#d5f4e5",
        "dark-blue" : "#1a2d62",
      },
      fontFamily: {
        custom: ['Poppins' , 'sans-serif'],
      }
    },
  },
  plugins: [],
};
