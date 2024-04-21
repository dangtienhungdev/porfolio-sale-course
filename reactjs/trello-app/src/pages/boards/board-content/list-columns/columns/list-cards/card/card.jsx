import AttachmentIcon from '@mui/icons-material/Attachment';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Card as MuiCard } from '@mui/material';
import Typography from '@mui/material/Typography';

const Card = ({ temporaryHideMedia }) => {
	if (temporaryHideMedia) {
		return (
			<MuiCard
				sx={{
					cursor: 'pointer',
					boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
					overflow: 'unset',
				}}
			>
				<CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
					<Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
				</CardContent>
			</MuiCard>
		);
	}
	return (
		<MuiCard
			sx={{
				cursor: 'pointer',
				boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
				overflow: 'unset',
			}}
		>
			<CardMedia
				sx={{ height: 140 }}
				image="https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg"
				title="green iguana"
			/>
			<CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
				<Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
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
		</MuiCard>
	);
};

export default Card;
