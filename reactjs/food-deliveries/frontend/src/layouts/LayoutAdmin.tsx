import { Header, SidebarAdmin } from '../components';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
	return (
		<Layout>
			<SidebarAdmin />
			<Layout>
				<Header />
				<Layout.Content>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
};

export default LayoutAdmin;
