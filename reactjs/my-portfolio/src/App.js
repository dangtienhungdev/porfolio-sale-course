import './App.css';

import { HomePage, SignInPage, SignUpPage } from 'pages';
import { Route, Routes } from 'react-router-dom';

import { LayoutDefault } from 'layouts';

const App = () => {
	return (
		<Routes>
			<Route element={<LayoutDefault />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			<Route path="/admin/sign-in" element={<SignInPage />} />
			<Route path="/admin/sign-up" element={<SignUpPage />} />
		</Routes>
	);
};

export default App;
