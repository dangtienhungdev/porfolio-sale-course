import { AutoComplete, Col, Input, Layout, Row } from 'antd';
import React, { useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';

const styleHeader: React.CSSProperties = {
	backgroundColor: '#F3F3F3',
	padding: 0,
	boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	borderRadius: '2px',
	marginBottom: '26px',
};

const Headers = () => {
	const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
	const handleSearch = (value: string) => {
		let res: { value: string; label: string }[] = [];
		if (!value || value.indexOf('@') >= 0) {
			res = [];
		} else {
			res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
				value,
				label: `${value}@${domain}`,
			}));
		}
		setOptions(res);
	};
	return (
		<Layout.Header style={styleHeader}>
			<Row>
				<Col span={24} style={{ padding: '0 16px' }}>
					<AutoComplete style={{ width: '100%' }} onSearch={handleSearch} options={options}>
						<Input
							bordered={false}
							placeholder="What would you like to eat?"
							prefix={<SearchOutlined />}
						/>
					</AutoComplete>
				</Col>
			</Row>
		</Layout.Header>
	);
};

export default Headers;
