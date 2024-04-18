import { cyan, teal } from '@mui/material/colors';

import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = extendTheme({
	trello: {
		appBarHeight: '58px',
		boardBarHeight: '68px',
	},
	colorSchemes: {
		light: {
			palette: {
				primary: teal,
			},
		},
		dark: {
			palette: {
				primary: cyan,
			},
		},
	},
});

export default theme;
