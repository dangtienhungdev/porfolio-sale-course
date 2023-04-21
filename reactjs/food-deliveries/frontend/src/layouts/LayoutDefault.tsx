import './style.scss';

import { Col, Layout, Row, Tabs, TabsProps } from 'antd';
import { Headers, Login, MyOrder, Register } from '../components';

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebars/Sidebar';

const styleSider: React.CSSProperties = {
	backgroundColor: '#F3F3F3',
	height: '100vh',
	overflow: 'auto',
	width: '100%',
};

const items: TabsProps['items'] = [
	{
		key: 'login',
		label: 'Đăng nhập',
		children: <Login />,
	},
	{
		key: 'register',
		label: 'Đăng ký',
		children: <Register />,
	},
];

const LayoutDefault = () => {
	const users = 'dangtienhung';
	return (
		<Layout>
			<Layout.Sider width={96} style={styleSider}>
				<Sidebar />
			</Layout.Sider>
			<Layout>
				<Row style={{ height: '100%' }}>
					<Col span={16} style={{ backgroundColor: '#fff', padding: '16px 24px' }}>
						<Headers />
						<Layout.Content>
							<Outlet />
						</Layout.Content>
					</Col>
					<Col span={8} style={{ padding: '16px 24px' }}>
						{!users ? <MyOrder /> : <Tabs defaultActiveKey="login" items={items} centered />}
					</Col>
				</Row>
			</Layout>
		</Layout>
	);
};

export default LayoutDefault;
