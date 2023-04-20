import { Col, Layout, Row } from 'antd';

import React from 'react';

const styleHeader: React.CSSProperties = {
	// backgroundColor: '#fff',
	// padding: 0,
};

const Headers = () => {
	return (
		<Layout.Header style={styleHeader}>
			<Row>
				<Col span={18}>Search</Col>
				<Col span={6}>Info</Col>
			</Row>
		</Layout.Header>
	);
};

export default Headers;
