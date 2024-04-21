import Box from '@mui/material/Box';
import ListColumns from './list-columns/list-columns';

const BoardContent = () => {
	return (
		<Box
			sx={{
				bgcolor: (theme) =>
					theme.palette.mode === 'dark'
						? theme.palette.midNight.secondary
						: theme.palette.blue.secondary,
				width: '100%',
				height: (theme) => `${theme.trello.boardContentHeight}`,
				borderTop: '1px solid white',
				p: '10px 0',
			}}
		>
			<ListColumns />
		</Box>
	);
};

export default BoardContent;
