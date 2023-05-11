import './style.scss';

import { Button, Card, Col, Divider, Image, Row, Space, Typography } from 'antd';
import { decreaseAmount, increaseAmount, removeFood } from '../../redux/reducers/orderSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import DrawerCheckOut from '../DrawerCheckOut/DrawerCheckOut';
import IconLocation from '../icons/IconLocation';
import { RootState } from '../../redux/store';
import { caculatorDistance } from '../../utils/caculatorDistance';
import { fomatCurrent } from '../../utils/fomatterCurrent';
import { v4 as uuidv4 } from 'uuid';

const styleMyOrder = {
	backgroundColor: '#F5F5F5',
};

const MyOrder = () => {
	const dispatch = useAppDispatch();
	/* useState */
	const [open, setOpen] = useState<boolean>(false);
	const [distance, setDistance] = useState<any>(0);
	const onClose = () => {
		setOpen(!open);
	};
	/* redux */
	const { currentUser }: any = useAppSelector((state: RootState) => state.user);
	const { order, totalAmount, totalPrice } = useAppSelector((state: RootState) => state.order);
	const handleDeleteFood = (id: string) => {
		dispatch(removeFood(id));
	};
	const handleIncrease = (id: string) => {
		dispatch(increaseAmount(id));
	};
	const handleDecrease = (id: string) => {
		dispatch(decreaseAmount(id));
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
	return (
		<>
			<Row style={styleMyOrder} className="container">
				<Col span={24}>
					<Typography.Title level={3} style={{ color: '#FF5C28' }}>
						My Order
					</Typography.Title>
					<Typography.Text>Delivery address</Typography.Text>
					<Row gutter={[16, 16]}>
						<Col span={16}>
							<Typography.Text
								ellipsis
								style={{
									marginTop: '2px',
									fontSize: '16px',
									fontWeight: 'bold',
									textTransform: 'capitalize',
								}}
							>
								{currentUser?.user?.address || 'Chưa cập nhật địa chỉ'}
							</Typography.Text>
						</Col>
						<Col span={8}>
							<div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF5C28' }}>
								<IconLocation />{' '}
								<span style={{ fontSize: '20px', color: '#FF5C28' }}>{distance.toFixed(1)}km</span>
							</div>
						</Col>
					</Row>
				</Col>
				<Col span={24} style={{ margin: '26px 0', height: '100%' }}>
					<Row gutter={[16, 16]}>
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
				</Col>
				<Divider />
				<Col span={24}>
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
								<span style={{ fontSize: '20px', color: '#FF5C28' }}>
									{fomatCurrent(totalPrice)}đ
								</span>
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
					<Row style={{ marginTop: '20px' }}>
						<Col span={24}>
							<Button
								style={{ width: '100%', backgroundColor: '#FF5C28' }}
								type="primary"
								onClick={() => onClose()}
							>
								Check Out
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
			<DrawerCheckOut open={open} onClose={onClose} />
		</>
	);
};

export default MyOrder;
