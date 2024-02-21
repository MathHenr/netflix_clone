/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      keyframes: {
        ellipse1: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        ellipse2: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(24px, 0)' },
        },
        ellipse3: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        ellipse1: 'ellipse1 .6s infinite',
        ellipse2: 'ellipse2 .6s infinite',
        ellipse3: 'ellipse3 .6s infinite',
      },
    },
  },
  plugins: [],
}
