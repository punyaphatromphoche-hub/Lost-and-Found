/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          blue: "#1E3A8A",
          yellow: "#FBBF24",
          light: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};
