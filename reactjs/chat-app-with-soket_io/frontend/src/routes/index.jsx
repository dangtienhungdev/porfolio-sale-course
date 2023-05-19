import { Chat, Login, Register } from '../pages';
import { Route, Routes } from 'react-router-dom';

import React from 'react';

const index = () => {
	return (
		<Routes>
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Chat />} />
		</Routes>
	);
};

export default index;
