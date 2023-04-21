import './style.scss';

import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const Login = () => {
	return (
		<Row className="container">
			<Col span={24}>
				<Typography.Title level={3} className="title">
					Đăng nhập
				</Typography.Title>
			</Col>
			<Col span={24}>
				<Form layout="vertical" autoComplete="off">
					<Row>
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
								label="Password"
								name="password"
								rules={[{ message: 'Không được để trống', required: true }]}
							>
								<Input.Password size="large" placeholder="Password" prefix={<LockOutlined />} />
							</Form.Item>
						</Col>
						<Col span={24} style={{ marginTop: '20px' }}>
							<Form.Item>
								<Button type="primary" htmlType="submit" className="btn-primary">
									Đăng nhập
								</Button>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Col>
		</Row>
	);
};

export default Login;
