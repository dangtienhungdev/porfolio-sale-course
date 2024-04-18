import Box from '@mui/material/Box';

const AppBar = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'primary.light',
				width: '100%',
				height: (theme) => theme.trello.appBarHeight,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			ahihi
		</Box>
	);
};

export default AppBar;
