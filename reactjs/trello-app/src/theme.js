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
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.main,
					fontSize: '0.875rem',
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => {
					return {
						color: theme.palette.primary.main,
						fontSize: '0.875rem',
						'.MuiOutlinedInput-notchedOutline': {
							borderColor: theme.palette.primary.main,
						},
						'&:hover': {
							'.MuiOutlinedInput-notchedOutline': {
								borderColor: theme.palette.primary.main,
							},
						},
						'& fieldset': {
							borderWidth: '1px !important',
						},
					};
				},
			},
		},
	},
});

export default theme;
