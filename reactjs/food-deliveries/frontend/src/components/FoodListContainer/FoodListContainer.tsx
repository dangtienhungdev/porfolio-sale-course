import './style.scss';

import FoodItem from './FoodItem';
import { Row } from 'antd';

const FoodListContainer = () => {
	return (
		<Row gutter={[48, 24]} className="food-lists">
			<FoodItem />
		</Row>
	);
};

export default FoodListContainer;
