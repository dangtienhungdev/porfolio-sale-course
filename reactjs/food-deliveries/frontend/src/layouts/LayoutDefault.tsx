import './style.scss';

import { Col, Layout, Row } from 'antd';

import { Headers } from '../components';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebars/Sidebar';

const styleSider: React.CSSProperties = {
	backgroundColor: '#F3F3F3',
	height: '100vh',
	overflow: 'auto',
	width: '100%',
};

const LayoutDefault = () => {
	return (
		<Layout>
			<Layout.Sider width={96} style={styleSider}>
				<Sidebar />
			</Layout.Sider>
			<Layout>
				<Row>
					<Col span={16} style={{ backgroundColor: '#fff', padding: '32px 36px' }}>
						<Headers />
						<Layout.Content style={{ padding: '20px 50px' }}>
							<Outlet />
						</Layout.Content>
					</Col>
					<Col span={8}>Right</Col>
				</Row>
			</Layout>
		</Layout>
	);
};

export default LayoutDefault;
