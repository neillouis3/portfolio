import type { Config } from "tailwindcss";
import {nextui} from '@nextui-org/theme'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        back_ground: "#ffffff",
        fore_ground: "#171717",
        darkback_ground: "#121212",
        darkfore_ground: "#ededed",
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-in-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translate(100%, 100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      flex: {
        '1': '1 1 0%', // flex-1
        '2': '2 2 0%', // flex-2
        '3': '3 3 0%', // flex-3
        '4': '4 4 0%', // flex-4
        '5': '5 5 0%', // flex-5
      },
    },

  },

  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {}
      },
      dark: {
        colors: {}
      },
    },
  })],
} satisfies Config;
