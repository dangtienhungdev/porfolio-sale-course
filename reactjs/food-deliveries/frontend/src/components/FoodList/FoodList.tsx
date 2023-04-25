import './style.scss';

import { Tabs, TabsProps } from 'antd';

import FoodListContainer from '../FoodListContainer/FoodListContainer';
import IconAll from '../icons/IconAll';
import IconPromotion from '../icons/IconPromotion';
import IconSales from '../icons/IconSales';
import IconTopRated from '../icons/IconTopRated';

const items: TabsProps['items'] = [
	{
		key: '1',
		label: (
			<span className="tabs-style">
				<IconAll />
				All Foods
			</span>
		),
		children: <FoodListContainer />,
	},
	{
		key: '2',
		label: (
			<span className="tabs-style">
				<IconSales />
				Best Seller
			</span>
		),
		children: <FoodListContainer />,
	},
	{
		key: '3',
		label: (
			<span className="tabs-style">
				<IconPromotion />
				Promotion
			</span>
		),
		children: <FoodListContainer />,
	},
	{
		key: '4',
		label: (
			<span className="tabs-style">
				<IconTopRated />
				Top Rated
			</span>
		),
		children: <FoodListContainer />,
	},
];

const FoodList = () => {
	return <Tabs defaultActiveKey="1" items={items} />;
};

export default FoodList;
