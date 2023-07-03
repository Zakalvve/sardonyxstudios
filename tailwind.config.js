const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
      },
      strokeWidth: {
        '5': '5px',
      },
      maxWidth: {
        '40': '10rem'
      },
      maxHeight: {
        '1/2': '50%'
      },
      boxShadow: {
        card: '0 0 0 1px rgba(0,0,0,.5), 0 70px 65px rgba(0,0,0,.18), 0 30px 30px rgba(0,0,0,.14), 0 15px 15px rgba(0,0,0,.12), 0 10px 8px rgba(0,0,0,.1), 0 4px 4px rgba(0,0,0,.08), 0 2px 2px rgba(0,0,0,.06)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#30363d',
        'neon-green': '#7ee787',
        'neon-red': '#cb634f',
        'neon-purple': '#6a3bc4',
        'neon-blue': '#7479ee',
        space: {
          100: '#7d8590',
          200: '#5e6871',
          300: '#43484f',
          400: '#30363d',
          500: '#161b22',
          600: '#0d1117'
        }
      }
    }
  },
  plugins: [],
}