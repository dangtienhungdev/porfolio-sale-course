import { Avatar, Col, Row, Typography } from 'antd';

import React from 'react';

const SidebarHeader = () => {
	return (
		<Row style={{ marginBottom: '25px' }}>
			<Col span={24}>
				<Avatar
					size={150}
					src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
					className="sidebar-avatar"
				/>
			</Col>
			<Col span={24}>
				<Typography.Title level={4} className="sidebar-title">
					Nombre del cliente
				</Typography.Title>
				<Typography.Text className="sidebar-desc">
					Correo del cliente
				</Typography.Text>
			</Col>
		</Row>
	);
};

export default SidebarHeader;
