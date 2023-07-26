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
        primary: {
          50: "#fffdf2",
          100: "#fefadd",
          500: "#989580",
          600: "#cbc7aa",
          800: "#4c4b40",
          900: "#191915",
        },
        secondary: {
          100: "#ff0000",
        },
        teritory: {
          100: "#000000",
        },
        widget: {
          100: "#f05d23",
        },
      },
    },
  },
  plugins: [],
};
