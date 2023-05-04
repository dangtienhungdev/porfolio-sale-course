import './style.scss';

import { Button, Form, Input, Spin, message } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import { IUserLogin } from '../../../interfaces/users.type';
import { LoadingOutlined } from '@ant-design/icons';
import { RootState } from '../../../redux/store';
import { loginUser } from '../../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
	const { isLoading } = useAppSelector((state: RootState) => state.auth.login);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const onFinish = async (values: IUserLogin) => {
		try {
			await loginUser(values, dispatch, navigate);
		} catch (error) {
			message.error('Đăng nhập thất bại');
		}
	};
	return (
		<div className="login-page">
			<div className="login-box">
				<div className="illustration-wrapper">
					<img
						src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
						alt="Login"
					/>
				</div>
				<Form name="login-form" onFinish={onFinish} autoComplete="off">
					<p className="form-title">Welcome back</p>
					<p>Login to the Dashboard</p>
					<Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
						<Input placeholder="email" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password placeholder="Password" />
					</Form.Item>
					<Form.Item>
						{isLoading ? (
							<Spin
								style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
								indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
							/>
						) : (
							<Button type="primary" htmlType="submit" className="login-form-button">
								LOGIN
							</Button>
						)}
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default LoginAdmin;
