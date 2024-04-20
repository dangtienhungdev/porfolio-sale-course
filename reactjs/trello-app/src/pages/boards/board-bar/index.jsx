import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Tooltip from '@mui/material/Tooltip';

const MENU_STYLES = {
	color: 'white',
	bgcolor: 'transparent',
	border: 'none',
	paddingX: '5px',
	borderRadius: '4px',
	'.MuiSvgIcon-root': {
		color: 'white',
	},
	'&:hover': {
		bgcolor: 'blue.secondary.50',
	},
};

const BoardBar = () => {
	return (
		<Box
			px={2}
			sx={{
				width: '100%',
				height: (theme) => theme.trello.boardBarHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 2,
				overflowX: 'auto',
				background: (theme) =>
					theme.palette.mode === 'dark'
						? theme.palette.midNight.secondary
						: theme.palette.blue.secondary,
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				{['Boards', 'Templates', 'Home'].map((item) => (
					<Chip
						key={item}
						icon={<DashboardIcon />}
						label={item}
						clickable
						sx={{
							...MENU_STYLES,
						}}
					/>
				))}
			</Box>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Button
					variant="outlined"
					startIcon={<PersonAddIcon />}
					sx={{
						color: 'white',
						borderColor: 'white',
						'&:hover': { borderColor: 'white' },
					}}
				>
					Invite
				</Button>
				<AvatarGroup
					max={8}
					total={24}
					sx={{
						'& .MuiAvatar-root': {
							width: '30px',
							height: '30px',
							fontSize: '1rem',
						},
					}}
				>
					{Array.from({ length: 20 }).map((_, index) => (
						<Tooltip key={index} title="Delete">
							<Avatar
								alt="Remy Sharp"
								src="https://i.pinimg.com/736x/58/29/bd/5829bdfa438410a86cf9b180c077939c.jpg"
							/>
						</Tooltip>
					))}
				</AvatarGroup>
			</Box>
		</Box>
	);
};

export default BoardBar;
