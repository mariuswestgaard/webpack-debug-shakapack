// /** @type {import('tailwindcss').Config} */

const colors = {
  current: 'currentColor',
  transparent: 'transparent',
  background: { DEFAULT: '#F8FFE0', secondary: '#151717', tertiary: '#F5FFFF', quaternary: '#FFFFFF'}, // Used for body/container background
  primary: { DEFAULT: '#D9FE7B' },
  secondary: { DEFAULT: '#2C3232' },
  tertiary: { DEFAULT: '#F8FAFA' },
  accent: { DEFAULT: '##D9FE7B', secondary: '#A2549E' },
  text: {
    DEFAULT: '#2C3232',
    body: '#2C3232',
    'body-inverted': '#FFFFFF',
    heading: '#2C3232',
    'heading-inverted': '#F8FFE0',
    accent: '#D9FE7B',
  },
  border: { DEFAULT: '#B5BDBD', 200: '#D1D1D1', secondary: '#e6e6e6' },
  error: { DEFAULT: '#ffa390' },
}

module.exports = {
  content: [
    './**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
  ],
  theme: {
    extend: {
      colors: colors,
      borderRadius: {
        button: "0.33rem",
        cards: "0.83rem"
      },
    },
  },
  plugins: [],
}

