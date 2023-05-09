import { Button, Col, Form, Input, Row, message } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import Payment from './components/Payment';
import { PlusOutlined } from '@ant-design/icons';
import { RootState } from '../../redux/store';
import { getOnePayment } from '../../API/payment';
import { loginUser } from '../../redux/actions/authAction';
import { updateUser } from '../../redux/actions/userAction';
import { useToggleModal } from '../../hooks/useToggleModal';

const UserInfo = () => {
	const [form] = Form.useForm();
	const dispatch = useAppDispatch();
	const [payment, setPayment] = useState<any>();
	const { currentUser }: any = useAppSelector((state: RootState) => state.auth.login);
	const { user }: any = useAppSelector((state: RootState) => state.user.currentUser);
	const { openModal, handleToggleModal } = useToggleModal();
	const handleAddPayment = () => {
		handleToggleModal('isOpenModalAdd');
	};
	useEffect(() => {
		if (!user) return;
		if (!payment) return;
		form.setFieldsValue({
			name: user.name,
			address: user.address,
			phone: user.phone,
			paymentMethodId: payment.cardName,
		});
		return () => {
			form.resetFields();
		};
	}, [form, user, payment]);
	useEffect(() => {
		const getPayment = async () => {
			if (user?.paymentMethodId) {
				try {
					const payment = user?.paymentMethodId;
					const response = await getOnePayment(currentUser.accessToken, payment);
					if (response) {
						setPayment(response.data.payment);
					}
				} catch (error) {
					console.log(error);
				}
			}
		};
		getPayment();
	}, [user?.paymentMethodId]);
	const onFinish = async (values: any) => {
		try {
			const newCurrent = {
				...user,
				name: values.name,
				address: values.address,
				phone: values.phone,
			};
			await updateUser(newCurrent, dispatch);
			message.success('Cập nhật thông tin thành công');
		} catch (error) {
			console.log('Cập nhật thông tin thất bại');
		}
	};
	return (
		<>
			<Row gutter={[32, 32]}>
				<Col span={24}>
					<Button type="primary" onClick={() => handleAddPayment()}>
						<PlusOutlined />
						Thêm phương thức thanh toán
					</Button>
				</Col>
				<Col span={24}>
					<Form layout="vertical" autoComplete="off" onFinish={onFinish} form={form}>
						<Row gutter={32}>
							<Col span={12}>
								<Form.Item
									name={'name'}
									label="Tên người dùng"
									rules={[{ message: 'Không được bỏ trống!', required: true }]}
								>
									<Input placeholder={'Họ và tên'} />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name={'address'}
									label="Địa chỉ người dùng"
									rules={[{ message: 'Không được bỏ trống!', required: true }]}
								>
									<Input placeholder={`${user.address ? 'Địa chỉ người dùng' : 'Chưa cập nhật'}`} />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name={'phone'}
									label="Sđt người dùng"
									rules={[{ message: 'Không được bỏ trống!', required: true }]}
								>
									<Input
										placeholder={`${user?.phone ? 'Số điện thoại người dùng' : 'Chưa cập nhật'}`}
									/>
								</Form.Item>
							</Col>
							{user?.paymentMethodId && (
								<Col span={12}>
									<Form.Item name={'paymentMethodId'} label="Phương thức thanh toán">
										<Input placeholder={'Phương thức thanh toán'} />
									</Form.Item>
								</Col>
							)}
							<Col span={24}>
								<Form.Item>
									<Button style={{ width: '100%' }} type="primary" htmlType="submit">
										Cập nhật thông tin
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
			<Payment openModal={openModal} handleToggleModal={handleToggleModal} />
		</>
	);
};

export default UserInfo;
