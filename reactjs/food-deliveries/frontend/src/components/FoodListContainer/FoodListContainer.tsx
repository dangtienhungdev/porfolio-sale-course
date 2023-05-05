import './style.scss';

import FoodItem from './FoodItem';
import { Row } from 'antd';

const FoodListContainer = ({ foods }: any) => {
	return (
		<Row gutter={[48, 24]} className="food-lists">
			<FoodItem foodList={foods.docs} />
		</Row>
	);
};

export default FoodListContainer;
