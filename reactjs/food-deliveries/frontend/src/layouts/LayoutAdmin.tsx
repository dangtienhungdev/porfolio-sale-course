import { Header, SidebarAdmin } from '../components';

import { Layout } from 'antd';
import { NotFound } from '../views';
import { Outlet } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hooks';

const LayoutAdmin = () => {
	const { currentUser } = useAppSelector<any>((state: RootState) => state.auth.login);
	if (!currentUser || currentUser.user.role !== 'admin') {
		return <NotFound />;
	}
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
