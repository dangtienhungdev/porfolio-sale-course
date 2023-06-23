import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import LayoutClient from '../layouts/client/LayoutClient';
import NotFound from '../pages/404/NotFound';

const RoutePath = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<LayoutClient />}>
					<Route path="/" element={<HomePage />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default RoutePath;
