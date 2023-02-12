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
				'aside-load': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0%)' },
				},
			},
			animation: {
				'text-load': 'text-load 4s steps(12) infinite',
				'aside-load': 'aside-load 1s ease',
			},
		},
	},
	plugins: [],
};
