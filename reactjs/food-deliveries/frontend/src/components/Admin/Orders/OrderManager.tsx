import { useEffect, useState } from 'react';

import { IOrders } from '../../../interfaces/orders.type';
import LayoutModule from '../../../modules/LayoutModule';
import ModalComponent from './components/Modal';
import { columnTypeOrder } from './data/Column';
import { getAllOrders } from '../../../API/orders';

const OrderManager = () => {
	const [openModal, setOpenModal] = useState({
		isOpenModalAdd: false,
		isOpenModalEdit: false,
		isOpenModalView: false,
	});
	const [order, setOrder] = useState<IOrders>({} as IOrders);
	const [search, setSearch] = useState<string>('');
	const [orders, setOrders] = useState<IOrders[]>([]);
	const [checkOrder, setCheckOrder] = useState<boolean>(false);
	const handleClickCheckOrder = () => {
		setCheckOrder(true);
	};
	const onCancel = () => {
		setOpenModal({
			isOpenModalAdd: false,
			isOpenModalEdit: false,
			isOpenModalView: false,
		});
	};
	const handleOpenModalView = (orderFood: IOrders) => {
		setOpenModal({
			isOpenModalAdd: true,
			isOpenModalEdit: true,
			isOpenModalView: true,
		});
		setOrder(orderFood);
	};
	const column = columnTypeOrder({ handleClickCheckOrder, checkOrder, handleOpenModalView });
	useEffect(() => {
		const fetchOrders = async () => {
			try {
				let response;
				if (search) {
					response = await getAllOrders();
				}
				response = await getAllOrders();
				if (response && response.data) {
					setOrders(response.data.docs.map((item: IOrders) => ({ ...item, key: item._id })));
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchOrders();
	}, [search]);
	return (
		<>
			<LayoutModule
				heading="món ăn"
				columns={column}
				dataSource={orders}
				setOpenModal={setOpenModal}
				setSearch={setSearch}
				scroll={{ x: 2000 }}
				pageSize={10}
			/>
			<ModalComponent
				open={openModal}
				onCancel={onCancel}
				title="Xem chi tiết đơn hàng"
				order={order}
			/>
		</>
	);
};

export default OrderManager;
