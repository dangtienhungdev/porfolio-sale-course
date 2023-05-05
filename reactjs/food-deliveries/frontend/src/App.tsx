import { useEffect, useState } from 'react';

import RoutesController from './routes/index';

function App() {
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
	useEffect(() => {
		function handleResize() {
			setScreenWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	if (screenWidth < 900) {
		return (
			<div
				style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
			>
				<h1>Sorry, this app is not supported on mobile devices</h1>
			</div>
		);
	} else {
		return <RoutesController />;
	}
}

export default App;
