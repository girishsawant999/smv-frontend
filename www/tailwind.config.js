module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'manrope-extra-bold': ['Manrope-extra-bold'],
        'manrope-extra-light': ['Manrope-extra-light'],
        'manrope-regular': ['Manrope-regular'],
        'manrope-semibold': ['Manrope-semibold']
      },
      backgroundColor: {
        '#FFFFFF': '#FFFFFF',
        '#1A181B': '#1A181B',
        '#4E4851': '#4E4851',
        '#F5F4F5': '#F5F4F5',
        '#3CC39A': '#3CC39A',
        '#74C2F1': '#74C2F1',
        '#9977FF': '#9977FF',
        '#FF8199': '#FF8199',
        '#FFB600': '#FFB600'
      },
      textColor: {
        '#4E4851': '#4E4851',
        '#9B939F': '#9B939F',
        '#1A181B': '#1A181B',
        '#3CC39A': '#3CC39A',
        '#74C2F1': '#74C2F1',
        '#9977FF': '#9977FF',
        '#FF8199': '#FF8199',
        '#FFB600': '#FFB600'
      },
      placeholderColor: {
        '#4E4851': '#4E4851'
      },
      borderRadius: {
        '30px': '30px',
        '20px': '20px',
        '40px': '40px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
