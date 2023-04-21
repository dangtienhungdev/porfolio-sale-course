import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

const Register = () => {
	const onFinsh = (values: any) => {
		console.log('🚀 ~ file: Register.tsx:7 ~ onFinsh ~ values:', values);
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
									Đăng ký
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
