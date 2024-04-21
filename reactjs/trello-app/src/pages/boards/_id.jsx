import AppBar from '~/components/app-bar/app-bar';
import BoardBar from './board-bar/board-bar';
import BoardContent from './board-content/board-content';
import Container from '@mui/material/Container';
import { mockData } from '~/apis/mock-data';

const Board = () => {
	return (
		<Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
			<AppBar />

			<BoardBar board={mockData?.board} />

			<BoardContent board={mockData?.board} />
		</Container>
	);
};

export default Board;
