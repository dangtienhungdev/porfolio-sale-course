/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        color1: '#FFB400',
        color2: 'rgba(255, 180, 0, 0.95)',
        color3: '#2B2B2B',
        color4: '#18191A',
        color5: '#3A3B3C',
        color6: '#242526',
        color7: '#767676',
        color8: '#F0F0F6',
        color9: '#E4E6EB',
        color10: '#E5E5E5',
      },
      fontFamily: {
        quicksan: ['Quicksand', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
