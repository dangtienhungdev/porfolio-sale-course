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
					<div style={{ height: '100%' }}>
						<Outlet />
					</div>
				</Layout.Content>
			</Layout>
		</Layout>
	);
};

export default LayoutAdmin;
