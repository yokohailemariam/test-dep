/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leza-bg': "url('/leza_bg.jpg')"
      },
      animation: {
        marquee: 'marquee 10s linear infinite' // Create a custom animation named 'marquee'
      }
    },
    keyframes: {
      marquee: {
        '0%': {
          transform: 'translateX(100%)' // Move from right to left
        },
        '100%': {
          transform: 'translateX(0%)' // Reset to initial position
        }
      }
    }
  },
  plugins: []
}
