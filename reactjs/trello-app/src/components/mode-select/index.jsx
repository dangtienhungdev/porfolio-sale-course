import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';

const ModeSelect = () => {
	const { mode, setMode } = useColorScheme();

	return (
		<FormControl
			sx={{
				m: 1,
				minWidth: 120,
			}}
			size="small"
		>
			<InputLabel id="mode-select-label">Mode</InputLabel>
			<Select
				labelId="mode-select-label"
				id="mode-select"
				value={mode}
				label="Mode"
				onChange={(e) => setMode(e.target.value)}
			>
				<MenuItem value="light">Light</MenuItem>
				<MenuItem value="dark">Dark</MenuItem>
			</Select>
		</FormControl>
	);
};

export default ModeSelect;
