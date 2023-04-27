import '../style.scss';

import { useEffect, useState } from 'react';

import LayoutModule from '../../../modules/LayoutModule';
import ModalAdd from './components/ModalAdd';
import { getALlFoods } from '../../../API/foods';
import { message } from 'antd';
import { useToggleValue } from '../../../hooks/useToggleValue';

const ManagerFoods = () => {
	/* useState */
	const [foods, setFoods] = useState([]);
	const { toggleValue: isOpenModalAdd, handleToggleValue: setIsOpenAdd } = useToggleValue();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const foods = await getALlFoods();
				if (foods) {
					setFoods(foods.foods.docs);
				}
			} catch (error) {
				message.error('Lấy sản phẩm thất bại');
			}
		};
		fetchData();
	}, []);
	/* table antd */
	const dataSource = [
		{
			key: '1',
			name: 'Mike',
			age: 32,
			address: '10 Downing Street',
		},
		{
			key: '2',
			name: 'John',
			age: 42,
			address: '10 Downing Street',
		},
	];
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
	];
	return (
		<>
			<LayoutModule
				heading="sản phẩm"
				dataSource={dataSource}
				columns={columns}
				setIsOpenAdd={setIsOpenAdd}
			/>
			<ModalAdd isOpenModalAdd={isOpenModalAdd} setIsOpenAdd={setIsOpenAdd} />
		</>
	);
};

export default ManagerFoods;
