module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'manrope-extra-bold': ['Manrope-extra-bold'],
        'manrope-extra-light': ['Manrope-extra-light']
      },
      minWidth: {
        '10': '2.5rem',
        'manrope': ['Manrope'],
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
