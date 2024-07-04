/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px'
    },

    colors: {
      'purple': '#59387A',
      'pink': '#C1389Bb',
      'orange': '#E06C75',
      'blue': '#4299FF',

      'gray-dark': '#282C34',
      'gray': '#5C6370',
      'gray-light': '#ABB2BF',
      'white': '#FFFFFF',
      'black2': '#000000',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
    extend: {
      backgroundImage: {
        'bannerBG': "url('../public/images/bannerBackground.png')",
      },

      spacing: {
        '30': '7.25rem',
        '102': '28.25rem',
        '128': '32rem',
        '144': '36rem',
        'exp': '25.5rem',
        'exph': '33rem',
        'exp3': '27rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          'display': 'none',  /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
}

