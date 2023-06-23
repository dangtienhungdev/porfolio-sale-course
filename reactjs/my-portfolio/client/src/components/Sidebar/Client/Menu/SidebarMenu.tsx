import { Col, Menu, Row } from 'antd';

import { items } from './components/Items';

const SidebarMenu = () => {
	return (
		<Row>
			<Col span={24}>
				<Menu
					style={{
						width: '100%',
					}}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					items={items}
				/>
			</Col>
		</Row>
	);
};

export default SidebarMenu;
