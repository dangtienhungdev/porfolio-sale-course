import { Button, Col, Form, Input, Radio, Row, Select, message } from 'antd';

import { IUserInfoManager } from '../../../../interfaces/users.type';
import type { RadioChangeEvent } from 'antd';
import { createUser } from '../../../../API/auth';
import { useState } from 'react';

interface IProps {
	onCancel: () => void;
}

const FormUser = ({ onCancel }: IProps) => {
	const [form] = Form.useForm();
	const [checkActive, setCheckActive] = useState<string>('active');
	const onChange = (e: RadioChangeEvent) => {
		setCheckActive(e.target.value);
	};
	const onFinish = async (values: IUserInfoManager) => {
		try {
			const data = { ...values, is_active: checkActive === 'active' ? true : false };
			const response: any = await createUser(data);
			if (response.status === 200) {
				message.success('Thêm mới người dùng thành công');
				form.resetFields();
				onCancel();
			}
		} catch (error) {
			message.error('Thêm mới người dùng thất bại');
		}
	};
	return (
		<Form layout="vertical" autoComplete="off" form={form} onFinish={onFinish}>
			<Row gutter={[32, 16]}>
				<Col span={8}>
					<Form.Item
						label="Tên người dùng"
						name={'name'}
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập tên người dùng',
							},
						]}
					>
						<Input placeholder="Tên người dùng" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						label="Email người dùng"
						name={'email'}
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập email người dùng',
							},
							{
								type: 'email',
								message: 'Email không hợp lệ',
							},
						]}
					>
						<Input placeholder="Email người dùng" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						label="Mật khẩu người dùng"
						name={'password'}
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập mật khẩu người dùng',
							},
						]}
					>
						<Input.Password placeholder="Password người dùng" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Địa chỉ người dùng"
						name={'address'}
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập địa chỉ người dùng',
							},
						]}
					>
						<Input placeholder="Địa chỉ người dùng" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Sđt người dùng"
						name={'phone'}
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập sđt người dùng',
							},
						]}
					>
						<Input placeholder="Sđt người dùng" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Phân quyền người dùng"
						name={'role'}
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập ohân quyền người dùng',
							},
						]}
					>
						<Select placeholder="Phân quyền người dùng">
							<Select.Option value="admin">Admin</Select.Option>
							<Select.Option value="user">User</Select.Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Phân quyền người dùng"
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập ohân quyền người dùng',
							},
						]}
					>
						<Radio.Group onChange={onChange} value={checkActive}>
							<Radio value={'active'}>Active</Radio>
							<Radio value={'inactive'}>InActive</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
				<Col span={24}>
					<Form.Item>
						<Button htmlType="submit" type="primary" style={{ width: '100%' }}>
							Thêm mới ngươi dùng
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default FormUser;
