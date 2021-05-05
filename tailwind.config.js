module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Slab', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        carrois: ['Carrois Gothic SC', 'sans-serif'],
        dots: ['Raleway Dots', 'cursive'],
      },
      colors: {
        eggplant: '#663f46',
        jet: '#333333',
        artichoke: '#7e846b',
        ashGray: '#a5ae9e',
        alabaster: '#e8ebe4',
        white: '#ffffff',
        gray200: '#E5E7EB',
      },
    },
    screens: {
      phone: '320px',

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
