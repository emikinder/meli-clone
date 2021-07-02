module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        meli: {
          DEFAULT: '#fff159',
        },

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
