/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        blue: { DEFAULT: '#3b6ff5' },
        violet: { DEFAULT: '#7c55f0' },
        cyan: { DEFAULT: '#00b8d4' },
        emerald: { DEFAULT: '#10c484' },
      },
    },
  },
  plugins: [],
}
