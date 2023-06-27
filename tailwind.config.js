/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    colors: {
      light: '#F1F0EC',
      dark: {
        100: "#9D6643",
        200:'#F1F0EC50',
        900: "#0E0906",
      }
    },
    fontFamily: {
      body: ['Roboto:wght@500'],
      'Roboto': ['Roboto', 'serif'],
      'sans': ['ui-sans-serif', 'system-ui', 'Roboto'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'gallery': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
        'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif',
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
    animation: {
      'toCircle': 'toCircle 3s ease-in'
      },
    keyframes: {
      'toCircle': {
        '0%' : { transform: 'scale-0' },
        '50%': { transform: 'scale-0.5' },
        '100%': { transform: 'scale-1' },
          }
    }
      
    }
  },
  plugins: [
    require('tailwind-clip-path')
  ],
}
