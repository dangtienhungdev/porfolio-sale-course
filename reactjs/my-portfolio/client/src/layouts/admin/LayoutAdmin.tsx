import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { SidebarAdmin } from '../../components/Sidebar';

const LayoutAdmin = () => {
	return (
		<Layout>
			<SidebarAdmin />
			<Layout style={{ marginLeft: '280px' }}>
				<Layout.Content>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
};

export default LayoutAdmin;
