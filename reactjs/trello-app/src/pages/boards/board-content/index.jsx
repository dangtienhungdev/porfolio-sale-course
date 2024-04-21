import AddCardIcon from '@mui/icons-material/AddCard';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Cloud from '@mui/icons-material/Cloud';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const COLUMNS_HEADER = '50px';
const COLUMNS_FOOTER = '56px';

const BoardContent = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
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
				{[1, 2, 3].map((_, index) => (
					<Box
						key={index}
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
								`calc(${theme.trello.boardContentHeight} - ${theme.spacing(
									5
								)})`,
						}}
					>
						<Box
							sx={{
								height: COLUMNS_HEADER,
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
								Column title
							</Typography>
							<Box>
								<Tooltip title="More options">
									<ExpandMoreIcon
										sx={{ color: 'text.primary', cursor: 'pointer' }}
										id="basic-column-dropdown"
										aria-controls={
											open ? 'basic-menu-column-dropdown' : undefined
										}
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
									`calc(${theme.trello.boardContentHeight} - ${theme.spacing(
										5
									)} - ${COLUMNS_HEADER} - ${COLUMNS_FOOTER})`,
								'&::-webkit-scrollbar-thumb': {
									borderRadius: '8px',
									backgroundColor: '#ced0da',
								},
							}}
						>
							{[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
								if (index % 2 === 0) {
									return (
										<Card
											sx={{
												cursor: 'pointer',
												boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
												overflow: 'unset',
											}}
											key={index}
										>
											<CardMedia
												sx={{ height: 140 }}
												image="https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg"
												title="green iguana"
											/>
											<CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
												<Typography>
													Lorem ipsum dolor sit amet consectetur.
												</Typography>
											</CardContent>
											<CardActions sx={{ p: '0 4px 8px 4px' }}>
												<Button size="small" startIcon={<GroupIcon />}>
													20
												</Button>
												<Button size="small" startIcon={<ModeCommentIcon />}>
													20
												</Button>
												<Button size="small" startIcon={<AttachmentIcon />}>
													20
												</Button>
											</CardActions>
										</Card>
									);
								}
								return (
									<Card
										sx={{
											cursor: 'pointer',
											boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
											overflow: 'unset',
										}}
										key={index}
									>
										<CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
											<Typography>Lizard</Typography>
										</CardContent>
									</Card>
								);
							})}
						</Box>

						<Box
							sx={{
								height: COLUMNS_FOOTER,
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
				))}
			</Box>
		</Box>
	);
};

export default BoardContent;
