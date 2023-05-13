import './style.scss';

import { Col, Row } from 'antd';

import MonthlyRevenue from './components/MonthlyRevenue';
import MostOrderedDishes from './components/MostOrderedDishes';
import WeeklyRevenue from './components/WeeklyRevenue';

const Dashboard = () => {
	return (
		<div className="container">
			<Row>
				<Col span={24}>
					<MonthlyRevenue />
				</Col>
				<Col span={12}>
					<MostOrderedDishes />
				</Col>
				<Col span={12}>
					<WeeklyRevenue />
				</Col>
			</Row>
		</div>
	);
};

export default Dashboard;
