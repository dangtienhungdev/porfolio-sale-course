import AddCardIcon from '@mui/icons-material/AddCard';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Column from './columns/column';

const ListColumns = ({ columns }) => {
	return (
		<Box
			sx={{
				bgcolor: 'inherit',
				display: 'flex',
				overflowX: 'auto',
				overflowY: 'hidden',
				width: '100%',
				height: '100%',
			}}
		>
			{columns &&
				columns.length > 0 &&
				columns.map((column) => <Column column={column} key={column._id} />)}

			<Box
				sx={{
					minWidth: '200px',
					maxWidth: '200px',
					alignItems: 'center',
					mx: 2,
					bgcolor: '#ffffff3d',
					borderRadius: '6px',
					height: 'fit-content',
				}}
			>
				<Button
					startIcon={<AddCardIcon />}
					sx={{ color: 'white', width: '100%', py: 1 }}
				>
					Add new cloumns
				</Button>
			</Box>
		</Box>
	);
};

export default ListColumns;
