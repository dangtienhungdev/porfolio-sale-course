import { Banner, FoodList } from '../../components';
import { Col, Row } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { RootState } from '../../redux/store';
import { getAllFoods } from '../../redux/actions/foodAction';
import { useEffect } from 'react';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { foods } = useAppSelector((state: RootState) => state.food);
	useEffect(() => {
		dispatch(getAllFoods());
	}, [dispatch]);
	return (
		<Row>
			<Col span={24} style={{ marginBottom: '26px' }}>
				<Banner />
			</Col>
			<Col span={24}>
				<FoodList foods={foods} />
			</Col>
		</Row>
	);
};

export default HomePage;
