import Box from '@mui/material/Box';
import Card from './card/card';

const ListCards = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				p: '4px 5px',
				m: '0 5px',
				overflowX: 'hidden',
				overflowY: 'auto',
				maxHeight: (theme) =>
					`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${
						theme.trello.columnsHeaderHeight
					} - ${theme.trello.columnsFooterHeight})`,
				'&::-webkit-scrollbar-thumb': {
					borderRadius: '8px',
					backgroundColor: '#ced0da',
				},
			}}
		>
			<Card />
			<Card temporaryHideMedia />
			<Card />
		</Box>
	);
};

export default ListCards;
