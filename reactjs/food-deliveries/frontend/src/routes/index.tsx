import { Dashboard, LoginAdmin, ManagerCategories, ManagerFoods } from '../components';
import { FoodPage, Hearts, HomePage, NotFound } from '../views';
import { Route, Routes } from 'react-router-dom';

import LayoutAdmin from '../layouts/LayoutAdmin';
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
			<Route path="/admin/sign-in" element={<LoginAdmin />} />
			<Route path="/admin" element={<LayoutAdmin />}>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="foods" element={<ManagerFoods />} />
				<Route path="categories" element={<ManagerCategories />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default index;
