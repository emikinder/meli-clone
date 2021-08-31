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
      width: {
        'w-logo': '8.375rem'
      },
      lineHeight: {
        'extra-xs': '0.1rem',
      },
      spacing: {
        'xss': '0.35rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
