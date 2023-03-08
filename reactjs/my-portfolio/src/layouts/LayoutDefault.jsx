import { HomeSidebar } from 'modules';
import { Outlet } from 'react-router-dom';
import React from 'react';

const LayoutDefault = () => {
	return (
		<div className="flex">
			<HomeSidebar />
			<Outlet />
		</div>
	);
};

export default LayoutDefault;
