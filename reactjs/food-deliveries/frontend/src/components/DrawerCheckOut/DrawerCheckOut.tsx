import './style.scss';

import {
	Button,
	Card,
	Col,
	Divider,
	Drawer,
	Form,
	Image,
	Radio,
	RadioChangeEvent,
	Row,
	Space,
	Typography,
	message,
} from 'antd';
import {
	decreaseAmount,
	increaseAmount,
	removeFood,
	resetOrder,
} from '../../redux/reducers/orderSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { IOrder } from '../../interfaces/orders.type';
import { RootState } from '../../redux/store';
import { caculatorDistance } from '../../utils/caculatorDistance';
import { createOrder } from '../../API/orders';
import { fomatCurrent } from '../../utils/fomatterCurrent';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	open: boolean;
	onClose: () => void;
}
const DrawerCheckOut = ({ open, onClose }: Props) => {
	const dispatch = useAppDispatch();
	const [distance, setDistance] = useState<any>(0);
	const { order, totalAmount, totalPrice } = useAppSelector((state: RootState) => state.order);
	const { currentUser }: any = useAppSelector((state: RootState) => state.user);
	const user = currentUser?.user;
	const [value, setValue] = useState(user?.paymentMethodId ? 2 : 1);
	const handleDeleteFood = (id: string) => {
		dispatch(removeFood(id));
	};
	const handleIncrease = (id: string) => {
		dispatch(increaseAmount(id));
	};
	const handleDecrease = (id: string) => {
		dispatch(decreaseAmount(id));
	};
	const onChange = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};
	/* useEffect */
	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const response = await caculatorDistance();
				if (response) {
					setDistance(response);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchLocation();
	}, []);
	const onFinish = async () => {
		try {
			const orderDetail = order.map((item: any) => {
				return {
					foodId: item._id,
					quantity: item.amount,
					price: item.price,
					current_price: item.price,
				};
			});
			const data = {
				userId: user._id,
				items: orderDetail,
				status: 'pending',
				total: totalPrice + Math.ceil(distance.toFixed(1) * 500),
				priceShipping: Math.ceil(distance.toFixed(1) * 500),
				address: user.address,
				is_active: true,
				paymentMethodId: value === 1 ? 'Tiền mặt' : user.paymentMethodId._id,
			} as IOrder;
			const response = await createOrder(data);
			if (response) {
				message.success('Order success');
				dispatch(resetOrder());
				onClose();
			}
		} catch (error) {
			message.error('Something went wrong, please try again');
		}
	};
	return (
		<Drawer
			width={640}
			placement="right"
			title="Checkout"
			closable={false}
			onClose={onClose}
			open={open}
			style={{ textTransform: 'capitalize', backgroundColor: '#ebebeb' }}
		>
			<Row gutter={[16, 16]} className="container">
				{order &&
					order.length > 0 &&
					order.map((item: any) => {
						return (
							<Col span={24} key={uuidv4()}>
								<Card hoverable className="card-container">
									<Row gutter={16}>
										<Col span={10}>
											<Image className="image" preview={false} src={item.images[0]} />
										</Col>
										<Col span={14}>
											<div className="card-body">
												<div className="card-body__heading">
													<Typography.Text ellipsis className="card-title">
														{item.name}
													</Typography.Text>
													<p>
														{item.amount} x {fomatCurrent(item.price)}đ
													</p>
												</div>
												<div className="card-body__quantity">
													<Space>
														<Button onClick={() => handleDecrease(item._id)}>-</Button>
														<Button type="primary">{item.amount}</Button>
														<Button onClick={() => handleIncrease(item._id)}>+</Button>
														<Button onClick={() => handleDeleteFood(item._id)}>
															<DeleteOutlined />
														</Button>
													</Space>
												</div>
											</div>
										</Col>
									</Row>
								</Card>
							</Col>
						);
					})}
			</Row>
			<Divider />
			<Row>
				<Col span={16}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						Tổng số lượng
					</Typography.Text>
				</Col>
				<Col span={8}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						<span style={{ fontSize: '20px', color: '#FF5C28' }}>{totalAmount}</span>
					</Typography.Text>
				</Col>
			</Row>
			<Row>
				<Col span={16}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						Tổng tiền
					</Typography.Text>
				</Col>
				<Col span={8}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						<span style={{ fontSize: '20px', color: '#FF5C28' }}>{fomatCurrent(totalPrice)}đ</span>
					</Typography.Text>
				</Col>
			</Row>
			<Row>
				<Col span={16}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						Phí giao hàng
					</Typography.Text>
				</Col>
				<Col span={8}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						<span style={{ fontSize: '20px', color: '#FF5C28' }}>
							{totalPrice === 0 ? 0 : fomatCurrent(Math.ceil(distance.toFixed(1) * 500))}đ
						</span>
					</Typography.Text>
				</Col>
			</Row>
			<Divider />
			<Row>
				<Col span={16}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>Tổng</Typography.Text>
				</Col>
				<Col span={8}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						<span style={{ fontSize: '20px', color: '#FF5C28' }}>
							{totalPrice === 0
								? 0
								: fomatCurrent(totalPrice + Math.ceil(distance.toFixed(1) * 500))}
							đ
						</span>
					</Typography.Text>
				</Col>
			</Row>
			<Divider />
			<Row>
				<Col span={6}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						Người nhận
					</Typography.Text>
				</Col>
				<Col span={18}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						<span style={{ fontSize: '20px', color: '#FF5C28' }}>{user?.name}</span>
					</Typography.Text>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>Địa chỉ</Typography.Text>
				</Col>
				<Col span={18}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }} ellipsis>
						<span style={{ fontSize: '20px', color: '#FF5C28' }}>{user?.address}</span>
					</Typography.Text>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
						Thanh toán
					</Typography.Text>
				</Col>
				<Col span={18}>
					<Radio.Group onChange={onChange} value={value}>
						<Radio value={1}>Tiền mặt</Radio>
						<Radio value={2}>Thẻ</Radio>
					</Radio.Group>
				</Col>
			</Row>
			<Button
				style={{ width: '100%', marginTop: '20px' }}
				type="primary"
				onClick={() => onFinish()}
			>
				Gọi món
			</Button>
		</Drawer>
	);
};

export default DrawerCheckOut;
