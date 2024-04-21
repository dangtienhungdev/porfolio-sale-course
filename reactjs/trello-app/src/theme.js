import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT = '58px';
const BOARD_BAR_HEIGHT = '68px';
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const COLUMNS_HEADER = '50px';
const COLUMNS_FOOTER = '56px';

// Create a theme instance.
const theme = extendTheme({
	trello: {
		appBarHeight: APP_BAR_HEIGHT,
		boardBarHeight: BOARD_BAR_HEIGHT,
		boardContentHeight: BOARD_CONTENT_HEIGHT,
		columnsHeaderHeight: COLUMNS_HEADER,
		columnsFooterHeight: COLUMNS_FOOTER,
	},
	colorSchemes: {
		light: {
			palette: {
				// primary: '#1565c0',
				blue: {
					primary: '#1565c0',
					secondary: '#1976d2',
					three: '#ebecf0',
				},
			},
		},
		dark: {
			palette: {
				// primary: '#2c3e50',
				midNight: {
					primary: '#2c3e50',
					secondary: '#34495e',
					three: '#333643',
				},
			},
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					'*::-webkit-scrollbar': {
						width: '8px',
						height: '8px',
					},
					'*::-webkit-scrollbar-thumb': {
						borderRadius: '8px',
					},
				},
			},
		},
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
		MuiTypography: {
			styleOverrides: {
				root: {
					'&.MuiTypography-body1': {
						fontSize: '0.875rem',
					},
				},
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
