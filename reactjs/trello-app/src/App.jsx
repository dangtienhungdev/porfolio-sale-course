import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
	return (
		<Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
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

			<Box
				sx={{
					backgroundColor: 'primary.dark',
					width: '100%',
					height: (theme) => theme.trello.boardBarHeight,
					display: 'flex',
					alignItems: 'center',
				}}
			>
				Board bar
			</Box>

			<Box
				sx={{
					backgroundColor: 'primary.main',
					width: '100%',
					height: (theme) =>
						`calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
				}}
			>
				Content
			</Box>
		</Container>
	);
}

export default App;
