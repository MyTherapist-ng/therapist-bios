/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grayscale: "#3D4757",
      },
      boxShadow: {
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      },
      backgroundImage: {
        footer: "url('/static/images/footer.svg')",
      },
    },
  },
  plugins: [],
};
