/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl-custom': '1311px', // Add custom breakpoint for 1311px
      },
    },
  },
  plugins: [],
}
