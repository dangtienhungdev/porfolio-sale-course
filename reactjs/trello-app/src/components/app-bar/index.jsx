import AppsIcon from '@mui/icons-material/Apps';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ModeSelect from '../mode-select';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Profiles from './menus/profiles';
import Recent from './menus/rencent';
import Starred from './menus/starred';
import SvgIcon from '@mui/material/SvgIcon';
import Templates from './menus/templates';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import TrelloIcon from '~/assets/trello.svg?react';
import Typography from '@mui/material/Typography';
import Workspaces from './menus/workspace';

const AppBar = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: (theme) => theme.trello.appBarHeight,
				display: 'flex',
				alignItems: 'center',
				padding: '0 1rem',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<AppsIcon sx={{ color: 'primary.main' }} />
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
						<SvgIcon
							component={TrelloIcon}
							inheritViewBox
							sx={{ color: 'primary.main' }}
						/>
						<Typography
							variant="span"
							sx={{
								fontSize: '1.2rem',
								fontWeight: 'bold',
								color: 'primary.main',
							}}
						>
							Trello
						</Typography>
						<Workspaces />

						<Recent />

						<Templates />

						<Starred />

						<Button variant="outlined">Create</Button>
					</Box>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<TextField
						id="outlined-search"
						label={'Search field'}
						type="search"
						size="small"
					/>
					<ModeSelect />
					<Tooltip title="Notifications" sx={{ cursor: 'pointer' }}>
						<Badge color="secondary" variant="dot">
							<NotificationsIcon sx={{ color: 'primary.main' }} />
						</Badge>
					</Tooltip>
					<Tooltip title="Help?" sx={{ cursor: 'pointer' }}>
						<Badge color="secondary">
							<HelpOutlineIcon sx={{ color: 'primary.main' }} />
						</Badge>
					</Tooltip>
					<Profiles />
				</Box>
			</Box>
		</Box>
	);
};

export default AppBar;
