module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '10': '2.5rem',
        'manrope': ['Manrope'],
        'sequel':['Sequel-76']
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
      },
      height: {
        '165': '660px'
        '135': '540px',
        '68': '274px',
        '17.5': '70px',
        '120': '480px',
        '4.5': '18px'
      },
      width: {
        '26': '104px',
        '84': '335px',
        '53.5': '214px',
        '13.75': '55px',
        '38.25': '153px',
        '17.5': '70px',
        '42': '168px',
        '34':'136px'
      },
      padding: {
        '17': '69px'
      },
      boxShadow: {
        'button': '0px 40px 18px 2px #FFFFFF'
      },
      screens: {
        'xsm': '374px',
        'xmd': '767px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
