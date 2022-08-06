/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        skeleton: "skeleton 1s linear infinite",
      },
      keyframes: {
        skeleton: {
          "0%, 100%": {
            background: "#f5f5f4",
            borderRadius: "5px",
          },
          "50%": { background: "#fafaf9" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7C3AED",
          secondary: "#8B5CF6",
          "base-100": "#fff",
        },
      },
    ],
  },
};
