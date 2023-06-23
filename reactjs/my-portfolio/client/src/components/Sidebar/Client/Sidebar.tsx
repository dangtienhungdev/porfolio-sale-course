import './style/style.scss';

import { Layout } from 'antd';
import React from 'react';
import SidebarHeader from './Header/SidebarHeader';
import SidebarMenu from './Menu/SidebarMenu';

const SidebarClientStyle: React.CSSProperties = {
	height: '100vh',
	overflow: 'auto',
	background: '#f2f3f7',
	position: 'fixed',
	top: 0,
	left: 0,
	bottom: 0,
};
const Sidebar = () => {
	return (
		<Layout.Sider
			width={280}
			style={SidebarClientStyle}
			className="sidebar-container"
		>
			<SidebarHeader />
			<SidebarMenu />
		</Layout.Sider>
	);
};

export default Sidebar;
