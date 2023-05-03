import LayoutModule from '../../../modules/LayoutModule';
import { useToggleValue } from '../../../hooks/useToggleValue';

const ManagerCategories = () => {
	/* useState */
	const { toggleValue: isOpenModalAdd, handleToggleValue: setIsOpenAdd } = useToggleValue();

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
			{/* <LayoutModule
				heading="category"
				columns={columns}
				dataSource={dataSource}
				setIsOpenAdd={setIsOpenAdd}
			/> */}
		</>
	);
};

export default ManagerCategories;
