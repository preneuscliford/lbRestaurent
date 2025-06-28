/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f5f2',
          100: '#efe9e2',
          200: '#e2d5c9',
          300: '#d2bfad',
          400: '#c2a990',
          500: '#b39173',
          600: '#a47a5e',
          700: '#8c6550',
          800: '#735445',
          900: '#5f473c',
        },
        secondary: {
          50: '#f9f7ed',
          100: '#f1ecd1',
          200: '#e6dba6',
          300: '#d9c87a',
          400: '#ccb54e',
          500: '#c0a232',
          600: '#a88929',
          700: '#8c7024',
          800: '#735a23',
          900: '#5f4a21',
        },
        gold: {
          50: '#fbf8f1',
          100: '#f7f1e1',
          200: '#f0e4c3',
          300: '#e6d29a',
          400: '#d9bc6e',
          500: '#cca646',
          600: '#b89035',
          700: '#97752d',
          800: '#7a5f2a',
          900: '#644e26',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
        'luxury-lg': '0 10px 40px -2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
