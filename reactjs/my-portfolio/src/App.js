import './App.css';

import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages';
import { LayoutDefault } from 'layouts';

const App = () => {
	return (
		<Routes>
			<Route element={<LayoutDefault />}>
				<Route path="/" element={<HomePage />} />
			</Route>
		</Routes>
	);
};

export default App;
