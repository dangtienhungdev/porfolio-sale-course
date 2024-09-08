import Button from '@mui/material/Button';
import Cloud from '@mui/icons-material/Cloud';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Typography from '@mui/material/Typography';

const Workspaces = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				id="basic-button-workspaces"
				aria-controls={open ? 'basic-menu-workspaces' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				endIcon={<ExpandMoreIcon />}
				sx={{ color: 'white' }}
			>
				Workspaces
			</Button>
			<Menu
				id="basic-menu-workspaces"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button-workspaces',
				}}
			>
				<MenuItem sx={{ color: 'white' }}>
					<ListItemIcon>
						<ContentCut fontSize="small" />
					</ListItemIcon>
					<ListItemText>Cut</ListItemText>
					<Typography variant="body2" color="text.secondary">
						⌘X
					</Typography>
				</MenuItem>
				<MenuItem sx={{ color: 'white' }}>
					<ListItemIcon>
						<ContentCopy fontSize="small" />
					</ListItemIcon>
					<ListItemText>Copy</ListItemText>
					<Typography variant="body2" color="text.secondary">
						⌘C
					</Typography>
				</MenuItem>
				<MenuItem sx={{ color: 'white' }}>
					<ListItemIcon>
						<ContentPaste fontSize="small" />
					</ListItemIcon>
					<ListItemText>Paste</ListItemText>
					<Typography variant="body2" color="text.secondary">
						⌘V
					</Typography>
				</MenuItem>
				<Divider />
				<MenuItem sx={{ color: 'white' }}>
					<ListItemIcon>
						<Cloud fontSize="small" />
					</ListItemIcon>
					<ListItemText>Web Clipboard</ListItemText>
				</MenuItem>
			</Menu>
		</>
	);
};

export default Workspaces;
