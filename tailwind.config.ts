import type { Config } from "tailwindcss";
import { garamond } from "./public/fonts/_fonts";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        padding: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1024px',
      '2xl': '1280px',
    },
    extend: {
      colors: {
        primary: '#b39534',
        secondary: '#989898',
        accent: '#F13024',
        cText: '#959ba9',
        black: '#0E0D06'
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        rubik: [`var(--font-rubik)`],
        barlow: [`var(--font-barlow)`],
        garamond: [`var(--font-garamond)`]
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  safelist: [
    {
      pattern: /w-\[\d+px\]/,  // Povolenie dynamických tried pre šírku v pixeloch
    },
  ],
  plugins: [require('tailwind-scrollbar')],
};
export default config;
