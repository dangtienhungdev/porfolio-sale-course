import { Chat, Login, Register, SetAvatar } from '../pages';
import { Route, Routes } from 'react-router-dom';

import React from 'react';

const index = () => {
	return (
		<Routes>
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/set-avatar" element={<SetAvatar />} />
			<Route path="/" element={<Chat />} />
		</Routes>
	);
};

export default index;
