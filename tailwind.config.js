module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'darkIcon': "url('/images/dark.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
