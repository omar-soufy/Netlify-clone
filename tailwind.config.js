/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      'blue': '#2E51ED',
      'white': '#fff',
      'offwhite': '#E8E9F9',
      'transparent': 'transparent',
      'navy': '#151A32',
      'bluedark': '#2F51EE',
      'cyan': '#35E5E2'
    },
    fontWeight: {
      'semibold': '680'
    },
    extend: {
      backgroundImage: theme => ({
        'hex-pattern': "url('file:///Users/omarsoufi/Downloads/composable-platform-stack-shells.svg')"
       })
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
       light: 300,
       normal: 400,
       medium: 500,
      semibold: 600,
       bold: 700,
      extrabold: 800,
      'extra-bold': 800,
       black: 900,
     },
     scale: {
      '0': '0',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
     '95': '.95',
      '100': '1',
     '105': '1.05',
     '110': '1.1',
      '125': '1.25',
      '150': '1.5',
     '200': '2',
     '250': '2.5',
    },
  },
  plugins: [],
}

