import { Card, Col, Image, Row, Space, Steps, Typography } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

import { IOrder } from '../../../interfaces/orders.type';
import { IUseToggleModal } from '../../../hooks/useToggleModal';
import { LayoutModal } from '../../../modules';
import { RootState } from '../../../redux/store';
import { fomatCurrent } from '../../../utils/fomatterCurrent';
import { getOneOrderUser } from '../../../API/orders';
import { useAppSelector } from '../../../redux/hooks';
import { v4 as uuidv4 } from 'uuid';

interface PropTypes {
	openModal: IUseToggleModal;
	handleToggleModal: (key: keyof IUseToggleModal) => void;
}

const HistoryOrder = ({ openModal, handleToggleModal }: PropTypes) => {
	const { currentUser }: any = useAppSelector((state: RootState) => state.auth.login);
	const [userInfo, setUserInfo] = useState<any>();
	const [order, setOrder] = useState<IOrder[]>();
	console.log('🚀 ~ file: HistoryOrder.tsx:21 ~ HistoryOrder ~ order:', order);
	useEffect(() => {
		if (currentUser) {
			setUserInfo(currentUser.user);
		}
	}, [currentUser]);
	useEffect(() => {
		const getOrder = async () => {
			try {
				if (!userInfo) return;
				const response = await getOneOrderUser(userInfo._id);
				if (response && response.data) {
					setOrder(response.data[0].items);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getOrder();
	}, [userInfo, userInfo?._id]);
	const handleOpenView = () => {
		handleToggleModal('isOpenModalView');
	};
	if (!userInfo) return null;
	return (
		<>
			{order && (
				<LayoutModal title="Lịch sử mua hàng" open={openModal} onCancel={handleOpenView}>
					<Row>
						<Col span={24}>
							<Typography.Title level={3}>Trạng thái đơn hàng</Typography.Title>
							<Steps
								items={[
									{
										title: 'Đã tiếp nhận',
										status: 'finish',
										icon: <UserOutlined />,
									},
									{
										title: 'Đang lên đơn',
										status: 'finish',
										icon: <SolutionOutlined />,
									},
									{
										title: 'Đang giao hàng',
										status: 'process',
										icon: <LoadingOutlined />,
									},
									{
										title: 'Giao hàng thành công!',
										status: 'wait',
										icon: <SmileOutlined />,
									},
								]}
							/>
						</Col>
						<Col span={24}>
							<Typography.Title level={3}>Thông tin đơn hàng</Typography.Title>
							<Row gutter={[16, 16]} className="container">
								{order.length > 0 &&
									order.map((item: any) => {
										return (
											<Col span={24} key={uuidv4()}>
												<Card hoverable className="card-container">
													<Row gutter={16}>
														<Col span={10}>
															<Image
																className="image"
																preview={false}
																src={item.foodId.images[0]}
															/>
														</Col>
														<Col span={14}>
															<div className="card-body">
																<div className="card-body__heading">
																	<Typography.Text ellipsis className="card-title">
																		{item.foodId.name}
																	</Typography.Text>
																	<p>
																		{item.quantity} x {fomatCurrent(item.price)}đ
																	</p>
																</div>
																<div className="card-body__quantity">
																	<Space></Space>
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
					</Row>
				</LayoutModal>
			)}
		</>
	);
};

export default HistoryOrder;
