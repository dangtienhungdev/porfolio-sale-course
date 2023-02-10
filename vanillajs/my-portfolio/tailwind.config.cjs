/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				lightMode: '#f2f3f7',
			},
			keyframes: {
				'text-load': {
					'40%, 60%': { left: 'calc(100%_+_4px)' },
					'100%': { left: 0 },
				},
			},
			animation: {
				'text-load': 'text-load 4s steps(12) infinite',
			},
		},
	},
	plugins: [],
};
