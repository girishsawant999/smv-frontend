module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
