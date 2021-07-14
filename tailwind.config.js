module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        rohit:
        {
          50: '#fff8da',
          100: '#ffeaad',
          200: '#ffdb7d',
          300: '#ffcd4b',
          400: '#ffbf1a',
          500: '#e6a500',
          600: '#b38100',
          700: '#805c00',
          800: '#4e3700',
          900: '#1e1100',
        },

        bms:
        {
         50: '#edf1fc',
         100: '#d3d4e1',
         200: '#b6b8c9',
         300: '#989bb2',
         400: '#7c7f9b',
         500: '#636582',
         600: '#4c4f66',
         700: '#363849',
         800: '#21222e',
         900: '#0a0a16',
        },
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
