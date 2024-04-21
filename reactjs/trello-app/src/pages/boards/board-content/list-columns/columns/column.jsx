import AddCardIcon from '@mui/icons-material/AddCard';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Cloud from '@mui/icons-material/Cloud';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListCards from './list-cards/list-cards';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { mapOrder } from '~/utils/sort';
import { useState } from 'react';

const Column = ({ column }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id');

	return (
		<Box
			sx={{
				minWidth: '300px',
				maxWidth: '300px',
				ml: 2,
				bgcolor: (theme) =>
					theme.palette.mode === 'dark'
						? theme.palette.midNight.three
						: theme.palette.blue.three,
				borderRadius: '6px',
				height: 'fit-content',
				maxHeight: (theme) =>
					`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
			}}
		>
			<Box
				sx={{
					height: (theme) => theme.trello.columnsHeaderHeight,
					p: 2,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					sx={{
						fontWeight: 'bold',
						cursor: 'pointer',
					}}
				>
					{column.title}
				</Typography>
				<Box>
					<Tooltip title="More options">
						<ExpandMoreIcon
							sx={{ color: 'text.primary', cursor: 'pointer' }}
							id="basic-column-dropdown"
							aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						/>
					</Tooltip>
					<Menu
						id="basic-menu-column-dropdown"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-column-dropdown',
						}}
					>
						<MenuItem sx={{ color: 'primary.main' }}>
							<ListItemIcon>
								<AddCardIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText>Add new card</ListItemText>
						</MenuItem>
						<MenuItem sx={{ color: 'primary.main' }}>
							<ListItemIcon>
								<ContentCut fontSize="small" />
							</ListItemIcon>
							<ListItemText>Cut</ListItemText>
						</MenuItem>
						<MenuItem sx={{ color: 'primary.main' }}>
							<ListItemIcon>
								<ContentCopyIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText>Copy</ListItemText>
						</MenuItem>
						<MenuItem sx={{ color: 'primary.main' }}>
							<ListItemIcon>
								<ContentPasteIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText>Paste</ListItemText>
						</MenuItem>
						<Divider />
						<MenuItem sx={{ color: 'primary.main' }}>
							<ListItemIcon>
								<Cloud fontSize="small" />
							</ListItemIcon>
							<ListItemText>Archive this column</ListItemText>
						</MenuItem>
						<MenuItem sx={{ color: 'primary.main' }}>
							<ListItemIcon>
								<DeleteForeverIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText>Remove this column</ListItemText>
						</MenuItem>
					</Menu>
				</Box>
			</Box>

			<ListCards cards={orderedCards} />

			<Box
				sx={{
					height: (theme) => theme.trello.columnsFooterHeight,
					p: 2,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Button startIcon={<AddCardIcon />}>Add new card</Button>
				<Tooltip title="More options">
					<DragHandleIcon sx={{ cursor: 'pointer' }} />
				</Tooltip>
			</Box>
		</Box>
	);
};

export default Column;
