import { Banner, FoodList } from '../../components';
import { Col, Row } from 'antd';

const HomePage = () => {
	return (
		<Row>
			<Col span={24} style={{ marginBottom: '26px' }}>
				<Banner />
			</Col>
			<Col span={24}>
				<FoodList />
			</Col>
		</Row>
	);
};

export default HomePage;
