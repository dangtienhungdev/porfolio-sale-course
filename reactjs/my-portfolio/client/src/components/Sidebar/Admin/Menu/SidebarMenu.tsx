import { Col, Menu, Row } from 'antd';

import React from 'react';
import { items } from './components/Items';

const SidebarMenu = () => {
	return (
		<Row>
			<Col span={24}>
				<Menu
					style={{
						width: '100%',
						background: '#f2f3f7',
					}}
					mode="inline"
					defaultSelectedKeys={['projects']}
					items={items}
				/>
			</Col>
		</Row>
	);
};

export default SidebarMenu;
