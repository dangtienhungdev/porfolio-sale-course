import { FoodPage, Hearts, HomePage } from '../views';
import { Route, Routes } from 'react-router-dom';

import LayoutDefault from '../layouts/LayoutDefault';

const index = () => {
	return (
		<Routes>
			<Route element={<LayoutDefault />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/foods" element={<FoodPage />} />
				<Route path="/hearts" element={<Hearts />} />
				<Route path="/users" element={'users'} />
			</Route>
			<Route path="*" element={'Not Found 404'} />
		</Routes>
	);
};

export default index;
