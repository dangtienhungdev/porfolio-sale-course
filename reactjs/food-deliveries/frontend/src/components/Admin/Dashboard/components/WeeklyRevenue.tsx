import { Col, Row, Typography } from 'antd';

import { Bar } from '@ant-design/plots';

const WeeklyRevenue = () => {
	const data = [
		{
			year: '1951 年',
			value: 38,
		},
		{
			year: '1952 年',
			value: 52,
		},
		{
			year: '1956 年',
			value: 61,
		},
		{
			year: '1957 年',
			value: 145,
		},
		{
			year: '1958 年',
			value: 48,
		},
	];
	const config: any = {
		data,
		xField: 'value',
		yField: 'year',
		seriesField: 'year',
		legend: {
			position: 'top-left',
		},
	};
	return (
		<Row style={{ marginTop: '32px' }}>
			<Col span={24}>
				<Typography.Title level={4}>Doanh thu hàng Tuần</Typography.Title>
				<Bar {...config} />
			</Col>
		</Row>
	);
};

export default WeeklyRevenue;
