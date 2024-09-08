import Box from '@mui/material/Box';
import { DndContext } from '@dnd-kit/core';
import ListColumns from './list-columns/list-columns';
import { mapOrder } from '~/utils/sort';

const BoardContent = ({ board }) => {
	const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id');

	const handleDragEnd = (event) => {
		console.log('🚀 ~ handleDragEnd ~ event:', event);
	};
	return (
		<DndContext onDragEnd={handleDragEnd}>
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
				<ListColumns columns={orderedColumns} />
			</Box>
		</DndContext>
	);
};

export default BoardContent;
