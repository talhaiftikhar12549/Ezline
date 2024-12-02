/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bigBounce: {
          '0%, 100%': { transform: 'translateY(-50px)' }, // Increased distance
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bigBounce: 'bigBounce 4s infinite', // Custom animation with duration
      },
    },
  },
  plugins: [],
}


