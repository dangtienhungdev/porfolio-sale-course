import './style.scss';

import { Layout, Menu } from 'antd';

import { itemSiderMenuAdmin } from '../../../routes/MenuItems';

const styleSider: React.CSSProperties = {
	backgroundColor: '#F3F3F3',
	height: '100vh',
	overflow: 'auto',
	width: '100%',
};
const SidebarAdmin = () => {
	return (
		<Layout.Sider width={260} style={styleSider} className="siderbar-container">
			<Menu
				className="siderbar-menu"
				defaultOpenKeys={['dashboard']}
				defaultSelectedKeys={['dashboard']}
				mode="inline"
				items={itemSiderMenuAdmin}
			/>
		</Layout.Sider>
	);
};

export default SidebarAdmin;
