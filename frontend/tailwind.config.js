/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      megrin: ["Megrim", 'system-ui']
    }
  },
  plugins: [],
}