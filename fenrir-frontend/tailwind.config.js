/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#0CC8A8',
        darkBg: '#0F0F0F',
        darkSurface: '#1A1A1A',
        darkSurfaceHover: '#252525'
      }
    },
  },
  plugins: [],
}

