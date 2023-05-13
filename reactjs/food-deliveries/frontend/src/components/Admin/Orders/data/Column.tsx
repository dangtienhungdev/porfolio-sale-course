import { Button, Col, Divider, Row, Space, Tag, Tooltip, Typography } from 'antd';
import { CheckCircleOutlined, CheckOutlined, EyeOutlined, SyncOutlined } from '@ant-design/icons';
import { IOrders, OrderStatus } from '../../../../interfaces/orders.type';

import { ColumnsType } from 'antd/es/table';
import { IFoodIdOrder } from '../../../../interfaces/foods.type';
import { fomatCurrent } from '../../../../utils/fomatterCurrent';
import { formatterDate } from '../../../../utils/fomatterDate';

interface PropTypes {
	handleClickCheckOrder: () => void;
	checkOrder: boolean;
	handleOpenModalView: (record: IOrders) => void;
}

export const columnTypeOrder = ({
	handleClickCheckOrder,
	checkOrder,
	handleOpenModalView,
}: PropTypes): ColumnsType<IOrders> => {
	return [
		{
			title: 'Mã đơn hàng',
			dataIndex: '_id',
			key: '_id',
			ellipsis: true,
			render: (text: string) => (
				<Tooltip title={text}>
					<Typography.Text>{text.slice(0, 8) + '...'}</Typography.Text>
				</Tooltip>
			),
		},
		{
			title: 'Thông tin khách hàng',
			dataIndex: 'userId',
			key: 'userId',
			render: (_, record: IOrders) => {
				return (
					<Row>
						<Col span={24}>
							<Typography.Text
								style={{
									color: '#FF5C28',
									fontSize: '18px',
									fontWeight: '500',
									textTransform: 'capitalize',
								}}
							>
								{record.userId.name}
							</Typography.Text>
						</Col>
						<Col span={24}>
							<Typography.Text>{record.userId.phone}</Typography.Text>
						</Col>
						<Col span={24}>
							<Typography.Text style={{ textTransform: 'capitalize' }}>
								{record.userId.address}
							</Typography.Text>
						</Col>
					</Row>
				);
			},
		},
		{
			title: 'Thông tin đơn hàng',
			dataIndex: 'items',
			key: 'items',
			render: (_, record: IOrders) => {
				return (
					<Row>
						{record.items.map((item: IFoodIdOrder) => (
							<Col key={item._id} span={24}>
								<Typography.Text style={{ textTransform: 'capitalize' }}>
									{item.foodId.name}
								</Typography.Text>
								<div>
									<Space>
										<Typography.Text style={{ color: '#FF5C28' }}>
											{item.quantity} x{' '}
										</Typography.Text>
										<Typography.Text style={{ color: '#FF5C28' }}>
											{fomatCurrent(item.price)}đ
										</Typography.Text>
									</Space>
								</div>
								<Divider />
							</Col>
						))}
					</Row>
				);
			},
		},
		{
			title: 'Trạng thái đơn hàng',
			dataIndex: 'status',
			key: 'status',
			render: (text: OrderStatus) => {
				switch (text) {
					case 'pending':
						return (
							<Tag icon={<SyncOutlined spin />} color="processing">
								Đang chờ
							</Tag>
						);
					case 'confirmed':
					case 'delivered':
						return (
							<Tag icon={<CheckCircleOutlined />} color="success">
								{text === 'confirmed' ? 'Đã xác nhận' : 'Đã giao hàng'}
							</Tag>
						);
					case 'canceled':
						return <Tag color="error">Đã hủy</Tag>;
					default:
						return null;
				}
			},
		},
		{
			title: 'Ngày đặt hàng',
			dataIndex: 'createdAt',
			key: 'createdAt',
			render: (text: string) => {
				return <Typography.Text>{formatterDate(text)}</Typography.Text>;
			},
		},
		{
			title: 'Active',
			dataIndex: 'is_active',
			key: 'is_active',
			render: (text: boolean) => {
				return <Tag color={text ? 'success' : 'default'}>{text ? 'Active' : 'Deactive'}</Tag>;
			},
		},
		{
			title: 'Địa chỉ giao hàng',
			dataIndex: 'address',
			key: 'address',
			render: (text: string) => {
				return <Typography.Text style={{ textTransform: 'capitalize' }}>{text}</Typography.Text>;
			},
		},
		{
			title: 'Phương thức thanh toán',
			dataIndex: 'paymentMethodId',
			key: 'paymentMethodId',
			render: (text: string) => {
				return (
					<Typography.Text style={{ textTransform: 'capitalize' }}>
						{text === 'Tiền mặt' ? 'Tiền mặt' : 'Banking'}
					</Typography.Text>
				);
			},
		},
		{
			title: 'Phí vận chuyển',
			dataIndex: 'priceShipping',
			key: 'priceShipping',
			render: (text: number) => (
				<Typography.Title level={5} style={{ color: '#FF5C28' }}>
					{fomatCurrent(text)}đ
				</Typography.Title>
			),
		},
		{
			title: 'Tổng tiền',
			dataIndex: 'total',
			key: 'total',
			render: (text: number) => (
				<Typography.Title level={5} style={{ color: '#FF5C28' }}>
					{fomatCurrent(text)}đ
				</Typography.Title>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record: IOrders) => {
				return (
					<Space size="middle">
						<Button onClick={() => handleOpenModalView(record)}>
							<EyeOutlined />
						</Button>
						{!checkOrder ? (
							<Tooltip title="Ấn để xác nhận đơn hàng">
								<Button onClick={() => handleClickCheckOrder()} type="primary">
									<CheckCircleOutlined />
								</Button>
							</Tooltip>
						) : (
							<Tooltip title="Đã xác nhận đơn hàng">
								<Button disabled onClick={() => handleClickCheckOrder()}>
									<CheckOutlined />
								</Button>
							</Tooltip>
						)}
					</Space>
				);
			},
		},
	];
};
