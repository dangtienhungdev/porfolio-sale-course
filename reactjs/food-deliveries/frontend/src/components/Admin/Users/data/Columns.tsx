import { Button, Col, Popconfirm, Row, Select, Tag, Typography } from 'antd';

import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined } from '@ant-design/icons';
import { IUserInfoManager } from '../../../../interfaces/users.type';
import { formatterDate } from '../../../../utils/fomatterDate';

interface IProps {
	confirm: (id: string) => void;
	handleChange: (value: { value: any; userInfo: IUserInfoManager }) => void;
}

const ColumnsTypeUsers = ({ confirm, handleChange }: IProps): ColumnsType<IUserInfoManager> => {
	const options = [
		{ value: 'active', label: 'active' },
		{ value: 'in-active', label: 'in-active' },
	];
	return [
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			render: (text: string) => <Typography.Title level={5}>{text}</Typography.Title>,
		},
		{
			title: 'Họ tên',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Số điện thoại',
			dataIndex: 'phone',
			key: 'phone',
		},
		{
			title: 'Địa chỉ',
			dataIndex: 'address',
			key: 'address',
			render: (text: string) => (
				<Typography.Text style={{ textTransform: 'capitalize' }}>{text}</Typography.Text>
			),
		},
		{
			title: 'Trạng thái',
			dataIndex: 'is_active',
			key: 'is_active',
			render: (text: boolean, record: IUserInfoManager) => (
				<Row>
					<Col span={24}>
						<Tag color={text ? 'green' : 'red'}>{text ? 'Đang hoạt động' : 'Đã khóa'}</Tag>
					</Col>
					<Col span={24}>
						<Select
							labelInValue
							options={options}
							onChange={(value) => handleChange({ value, userInfo: record })}
							placeholder="Tình trạng người dùng"
						/>
					</Col>
				</Row>
			),
		},
		{
			title: 'Phân quyền',
			dataIndex: 'role',
			key: 'role',
			render: (text: string) => <Tag color={text === 'admin' ? 'gold' : 'cyan'}>{text}</Tag>,
		},
		{
			title: 'Thanh toán',
			dataIndex: 'paymentMethodId',
			key: 'paymentMethodId',
			render: (_: string, record: IUserInfoManager) =>
				record.paymentMethodId && (
					<Typography.Text>
						{record.paymentMethodId ? 'Số thẻ' : 'Chưa có thẻ để thanh toán'}
					</Typography.Text>
				),
		},
		{
			title: 'Ngày tạo',
			dataIndex: 'createdAt',
			key: 'createdAt',
			render: (text: string) => <Typography.Text>{formatterDate(text)}</Typography.Text>,
		},
		{
			title: 'Action',
			key: 'action',
			render: (_: string, record: IUserInfoManager) => (
				<Popconfirm
					placement="top"
					title={'Are you sure to delete this task?'}
					onConfirm={() => confirm(record._id)}
					okText="Yes"
					cancelText="No"
				>
					<Button type="primary">
						<Typography.Text style={{ color: 'white' }}>
							<DeleteOutlined />
						</Typography.Text>
					</Button>
				</Popconfirm>
			),
		},
	];
};

export default ColumnsTypeUsers;
