import './style.scss';

import { Button, Col, Form, Input, Row, Typography, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { IUserLogin } from '../../interfaces/users.type';
import { loginUser } from '../../redux/actions/authAction';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onFinish = async (values: IUserLogin) => {
		try {
			await loginUser(values, dispatch, navigate);
		} catch (error) {
			message.error('Đăng nhập thất bại');
		}
	};
	return (
		<Row className="container">
			<Col span={24}>
				<Typography.Title level={3} className="title">
					Đăng nhập
				</Typography.Title>
			</Col>
			<Col span={24}>
				<Form layout="vertical" autoComplete="off" onFinish={onFinish}>
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
								rules={[
									{ message: 'Không được để trống', required: true },
									{ min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự' },
								]}
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
