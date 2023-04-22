import { Button, Col, Form, Input, Row, Spin, Typography, message } from 'antd';
import { LoadingOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { IUserRegister } from '../../interfaces/users.type';
import { RootState } from '../../redux/store';
import { registerUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	/* redux */
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((state: RootState) => state.auth.register);

	/* submit form */
	const onFinsh = async (values: IUserRegister) => {
		try {
			await registerUser(values, dispatch, navigate);
		} catch (error) {
			message.error('Đăng ký thất bại');
		}
	};
	return (
		<Row className="container">
			<Col span={24}>
				<Typography.Title level={3} className="title">
					Đăng ký
				</Typography.Title>
			</Col>
			<Col span={24}>
				<Form layout="vertical" autoComplete="off" onFinish={onFinsh}>
					<Row>
						<Col span={24}>
							<Form.Item
								label="Tên người dùng"
								name="name"
								rules={[{ required: true, message: 'Không được bỏ trống' }]}
							>
								<Input prefix={<UserOutlined />} size="large" placeholder="Tên người dùng" />
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								label="Email"
								name="email"
								rules={[
									{ message: 'Không được để trống', required: true },
									{ type: 'email', message: 'Không đúng định dạng emai' },
								]}
							>
								<Input placeholder="Email" size="large" prefix={<MailOutlined />} />
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								name="password"
								label="Mật khẩu"
								rules={[
									{ required: true, message: 'Không được để trống!' },
									{ min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự' },
								]}
								hasFeedback
							>
								<Input.Password size="large" placeholder="Mật khẩu" />
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								name="confirmPassword"
								label="Xác nhận mật khẩu"
								dependencies={['password']}
								hasFeedback
								rules={[
									{ required: true, message: 'Không được để trống!' },
									{ min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự' },
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue('password') === value) {
												return Promise.resolve();
											}
											return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
										},
									}),
								]}
							>
								<Input.Password size="large" placeholder="Xác nhận mật khẩu" />
							</Form.Item>
						</Col>
						<Col span={24} style={{ marginTop: '20px' }}>
							<Form.Item>
								<Button type="primary" htmlType="submit" className="btn-primary">
									{isLoading ? (
										<Spin
											indicator={<LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />}
										/>
									) : (
										'Đăng ký'
									)}
								</Button>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Col>
		</Row>
	);
};

export default Register;
