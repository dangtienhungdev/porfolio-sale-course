import { Col, Input, Layout, Row } from 'antd';

import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

const styleHeader: React.CSSProperties = {
	backgroundColor: '#F3F3F3',
	padding: 0,
	boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	borderRadius: '2px',
	marginBottom: '26px',
};

const Headers = () => {
	return (
		<Layout.Header style={styleHeader}>
			<Row>
				<Col span={24} style={{ padding: '0 16px' }}>
					<Input
						placeholder="What would you like to eat?"
						bordered={false}
						prefix={<SearchOutlined />}
					/>
				</Col>
			</Row>
		</Layout.Header>
	);
};

export default Headers;
