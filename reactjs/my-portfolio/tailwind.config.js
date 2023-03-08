/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'playfair-display': ['Playfair Display', 'serif'],
				quicksand: ['Quicksand', 'sans-serif'],
			},
			colors: {
				primary: '#2C98F0',
				text1: '#171725',
				text2: '#4b5264',
				text3: '#808191',
				text4: '#b2b3bd',
				'icon-color': '#a2a2a8',
				white: '#fff',
				error: '#eb5757',
				darkbg: '#13131a',
				darkSecondary: '#1c1c24',
				softDark: '#22222c',
				darfSoft: '#24242c',
				darkStroke: '#3a3a43',
				darkRed: '#422c32',
			},
		},
	},
	plugins: [],
};
