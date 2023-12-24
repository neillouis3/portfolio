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
      // or have default horizontal padding
      padding: '1rem',
      // default breakpoints but with 40px removed
      //
      // notice how the color changes at 768px but
      // the container size changes at 728px
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },

    
    colors: {
      'purple': '#59387A',
      'pink': '#C1389Bb',
      'orange': '#E06C75',

      'gray-dark': '#282C34',
      'gray': '#5C6370',
      'gray-light': '#ABB2BF',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

