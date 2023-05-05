import './style.scss';

import DrawerFood from '../DrawerFood/DrawerFood';
import FoodItem from './FoodItem';
import { IFood } from '../../interfaces/foods.type';
import { Row } from 'antd';
import { useState } from 'react';

const FoodListContainer = ({ foods }: any) => {
	const [open, setOpen] = useState<boolean>(false);
	const onClose = () => {
		setOpen(!open);
	};
	const [foodItem, setFoodItem] = useState<IFood>({} as IFood);
	return (
		<>
			<Row gutter={[48, 24]} className="food-lists">
				<FoodItem foodList={foods.docs} onClose={onClose} setFoodItem={setFoodItem} />
			</Row>
			<DrawerFood open={open} onClose={onClose} foodItem={foodItem} />
		</>
	);
};

export default FoodListContainer;
