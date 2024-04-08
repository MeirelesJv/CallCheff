/** @type {import('tailwindcss').Config} */
export default {
  content: ['"./src/**/*.{html,js,tsx}"'],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#FF9C1D',
        'light-grey':'#f9f9f9',
        'medium-grey':'#c1c1c3' ,
        'dark':'#282729'
      },
    },
  },
  plugins: [],
}

