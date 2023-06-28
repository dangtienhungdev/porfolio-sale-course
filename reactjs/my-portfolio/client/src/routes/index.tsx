import {
	AuthForm,
	ManagerCategories,
	ManagerUsers,
	Projects,
} from '../pages/admin';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import { LayoutAdmin } from '../layouts';
import LayoutClient from '../layouts/client/LayoutClient';
import NotFound from '../pages/404/NotFound';

const RoutePath = () => {
	return (
		<>
			<Routes>
				<Route element={<LayoutClient />}>
					<Route path="/" element={<HomePage />} />
				</Route>
				<Route path="/admin/login" element={<AuthForm />} />
				<Route element={<LayoutAdmin />}>
					<Route path="/admin/projects" element={<Projects />} />
					<Route path="/admin/users" element={<ManagerUsers />} />
					<Route path="/admin/categories" element={<ManagerCategories />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default RoutePath;
