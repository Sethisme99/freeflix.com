/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {animation: {
      'swipe-in': 'swipeIn 0.5s ease-in-out',
      'swipe-out': 'swipeOut 0.5s ease-in-out',
    },
    keyframes: {
      swipeIn: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      swipeOut: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },},
  },
  plugins: [('tailwind-scrollbar-hide')],
}

