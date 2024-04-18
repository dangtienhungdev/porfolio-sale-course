import Button from '@mui/material/Button';
import { useColorScheme } from '@mui/material/styles';
function App() {
	return (
		<>
			<ModeToggle />
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
				itaque minima nobis, aliquam ab animi labore vitae, id quod quia atque
				quasi. Eum repellat error exercitationem! Quis nesciunt corporis libero!
			</div>
			<Button variant="contained">Hello world</Button>
		</>
	);
}

function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	return (
		<Button
			onClick={() => {
				setMode(mode === 'light' ? 'dark' : 'light');
			}}
		>
			{mode === 'light' ? 'Turn dark' : 'Turn light'}
		</Button>
	);
}

export default App;
