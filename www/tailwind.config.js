module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'manrope-extra-bold': ['Manrope-extra-bold'],
        'manrope-extra-light': ['Manrope-extra-light']
      },
      backgroundColor: {
        '#FFFFFF': '#FFFFFF',
        '#1A181B': '#1A181B',
        '#4E4851': '#4E4851',
        '#F5F4F5': '#F5F4F5',
        '#3CC39A': '#3CC39A'
      },
      textColor: {
        '#4E4851': '#4E4851',
        '#9B939F': '#9B939F',
        '#1A181B': '#1A181B',
        '#3CC39A': '#3CC39A'
      },
      placeholderColor: {
        '#4E4851': '#4E4851'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
