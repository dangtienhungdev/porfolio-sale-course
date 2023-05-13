import './style.scss';

import { Card, Col, Divider, Row, Typography } from 'antd';

import { IOrders } from '../../../../interfaces/orders.type';
import { IUseToggleModal } from '../../../../hooks/useToggleModal';
import { LayoutModal } from '../../../../modules';
import { fomatCurrent } from '../../../../utils/fomatterCurrent';
import { v4 as uuidv4 } from 'uuid';

interface PropTypes {
	open: IUseToggleModal;
	onCancel: () => void;
	title: string;
	order: IOrders;
}

const ModalComponent = ({ open, onCancel, title, order }: PropTypes) => {
	console.log('🚀 ~ file: Modal.tsx:19 ~ ModalComponent ~ order:', order);
	return (
		<LayoutModal title={title} onCancel={onCancel} open={open}>
			<Row gutter={16}>
				<Col span={14}>
					<div>
						<Typography.Text style={{ fontSize: '18px', fontWeight: 'bold' }}>
							Thông tin khách hàng
						</Typography.Text>
					</div>
					<Divider />
					<Typography.Text>
						{order?.userId?.name} - {order?.userId?.phone}
					</Typography.Text>
					<br />
					<Typography.Text>{order?.userId?.address}</Typography.Text>
					<Divider />
					<Typography.Text>Phí giao hàng: {fomatCurrent(order?.priceShipping)}đ</Typography.Text>
					<br />
					<Typography.Text>Tổng tiền: {fomatCurrent(order?.total)}đ</Typography.Text>
				</Col>
				<Col span={10}>
					<Row className="container" gutter={[16, 16]}>
						{order &&
							order?.items?.length > 0 &&
							order?.items?.map((item) => (
								<Col span={24} key={uuidv4()}>
									<Card hoverable className="card-container">
										<Row gutter={[16, 16]}>
											<Col span={24}>
												<div className="card-body">
													<div className="card-body__heading">
														<Typography.Text ellipsis className="card-title">
															{item.foodId.name}
														</Typography.Text>
														<p>
															{item.quantity} x {fomatCurrent(item.price)}đ
														</p>
													</div>
												</div>
											</Col>
										</Row>
									</Card>
								</Col>
							))}
					</Row>
				</Col>
			</Row>
		</LayoutModal>
	);
};

export default ModalComponent;
