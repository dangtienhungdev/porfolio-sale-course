import AppBar from '~/components/app-bar/app-bar';
import BoardBar from './board-bar/board-bar';
import BoardContent from './board-content/board-content';
import Container from '@mui/material/Container';

const Board = () => {
	return (
		<Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
			<AppBar />

			<BoardBar />

			<BoardContent />
		</Container>
	);
};

export default Board;
