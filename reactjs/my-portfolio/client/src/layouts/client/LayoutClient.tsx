import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Client/Sidebar';

const LayoutClient = () => {
	return (
		<Layout>
			<Sidebar />
			<Layout style={{ marginLeft: '260px' }}>
				<Layout.Content>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
};

export default LayoutClient;
