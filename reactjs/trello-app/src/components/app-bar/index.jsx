import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AppsIcon from '@mui/icons-material/Apps';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InputAdornment from '@mui/material/InputAdornment';
import ModeSelect from '../mode-select';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Profiles from './menus/profiles';
import Recent from './menus/rencent';
import SearchIcon from '@mui/icons-material/Search';
import Starred from './menus/starred';
import SvgIcon from '@mui/material/SvgIcon';
import Templates from './menus/templates';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import TrelloIcon from '~/assets/trello.svg?react';
import Typography from '@mui/material/Typography';
import Workspaces from './menus/workspace';
import { useState } from 'react';

const AppBar = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<Box
			sx={{
				width: '100%',
				height: (theme) => theme.trello.appBarHeight,
				display: 'flex',
				alignItems: 'center',
				padding: '0 1rem',
				overflowX: 'auto',
				background: (theme) =>
					theme.palette.mode === 'dark'
						? theme.palette.midNight.primary
						: theme.palette.blue.primary,
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
					<AppsIcon sx={{ color: 'white' }} />
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
						<SvgIcon
							component={TrelloIcon}
							inheritViewBox
							sx={{ color: 'white' }}
						/>
						<Typography
							variant="span"
							sx={{
								fontSize: '1.2rem',
								fontWeight: 'bold',
								color: 'white',
							}}
						>
							Trello
						</Typography>

						<Box
							sx={{
								display: {
									xs: 'none',
									md: 'flex',
								},
								gap: 1,
							}}
						>
							<Workspaces />
							<Recent />
							<Templates />
							<Starred />
							<Button
								sx={{
									color: 'white',
									border: 'none',
									'&:hover': { border: 'none' },
								}}
								variant="outlined"
								startIcon={<AddToPhotosIcon />}
							>
								Create
							</Button>
						</Box>
					</Box>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<TextField
						id="outlined-search"
						label={'Search...'}
						type="text"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						size="small"
						sx={{
							minWidth: '120px',
							color: 'white',
							border: 'white',
							'& label': { color: 'white' },
							'& label.Mui-focused': { color: 'white' },
							'& input': { color: 'white' },
							'& .MuiInputBase-input': { color: 'white' },
							'& .MuiInput-underline:before': {
								borderBottom: '1px solid white',
							},
							'& .MuiOutlinedInput-root': {
								'& fieldset': {
									borderColor: 'white',
								},
								'&:hover fieldset': {
									borderColor: 'white',
								},
								'&.Mui-focused fieldset': {
									borderColor: 'white',
								},
							},
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon sx={{ color: 'white' }} />
								</InputAdornment>
							),
							endAdornment: (
								<CloseIcon
									fontSize="small"
									sx={{
										color: searchValue ? 'white' : 'transparent',
										cursor: 'pointer',
									}}
									onClick={() => setSearchValue('')}
								/>
							),
						}}
					/>
					<ModeSelect />
					<Tooltip title="Notifications" sx={{ cursor: 'pointer' }}>
						<Badge color="warning" variant="dot">
							<NotificationsIcon sx={{ color: 'white' }} />
						</Badge>
					</Tooltip>
					<Tooltip title="Help?" sx={{ cursor: 'pointer' }}>
						<Badge color="secondary">
							<HelpOutlineIcon sx={{ color: 'white' }} />
						</Badge>
					</Tooltip>
					<Profiles />
				</Box>
			</Box>
		</Box>
	);
};

export default AppBar;
