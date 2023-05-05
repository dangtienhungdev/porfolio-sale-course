import './style.scss';

import { Col, FloatButton, Layout, Row, Tabs, TabsProps } from 'antd';
import { Headers, Login, MyOrder, Register } from '../components';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { RootState } from '../redux/store';
import Sidebar from '../components/Sidebars/Sidebar';
import { UserSwitchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { createAxios } from '../config/intance';
import jwt_decode from 'jwt-decode';
import { loginSuccess } from '../redux/reducers/authSlice';
import { logoutUser } from '../redux/actions/authAction';
import { useEffect } from 'react';

const styleSider: React.CSSProperties = {
	backgroundColor: '#F3F3F3',
	height: '100vh',
	overflow: 'auto',
	width: '100%',
};

const items: TabsProps['items'] = [
	{
		key: 'login',
		label: 'Đăng nhập',
		children: <Login />,
	},
	{
		key: 'register',
		label: 'Đăng ký',
		children: <Register />,
	},
];

const LayoutDefault = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { currentUser }: any = useAppSelector((state: RootState) => state.auth.login);
	useEffect(() => {
		if (!currentUser) {
			navigate('/');
		}
	}, [navigate, currentUser]);
	const accessToken = currentUser?.accessToken;
	const id = currentUser?._id;
	const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);
	/* xứ lí logout */
	const handleLogout = () => {
		logoutUser(dispatch, id, navigate, accessToken, axiosJWT);
	};

	/* axios interceptor */
	let axiosJwt = axios.create();
	axiosJwt.interceptors.request.use(async (config) => {
		const date = new Date();
		const decodedToken = jwt_decode(currentUser.accessToken) as { exp: number };
		if (decodedToken.exp < date.getTime() / 1000) {
		}
		return config;
	});
	return (
		<Layout>
			<Layout.Sider width={96} style={styleSider}>
				<Sidebar handleLogout={handleLogout} />
			</Layout.Sider>
			<Layout>
				<Row style={{ height: '100%' }}>
					<Col span={16} style={{ backgroundColor: '#fff', padding: '16px 24px' }}>
						<Headers />
						<Layout.Content>
							<Outlet />
						</Layout.Content>
					</Col>
					<Col span={8} style={{ padding: '16px 24px' }}>
						{currentUser ? <MyOrder /> : <Tabs defaultActiveKey="login" items={items} centered />}
					</Col>
				</Row>
			</Layout>
			{currentUser && currentUser.user.role === 'admin' && (
				<Link to={'/admin/dashboard'}>
					<FloatButton icon={<UserSwitchOutlined />} type="primary" style={{ right: 50 }} />
				</Link>
			)}
		</Layout>
	);
};

export default LayoutDefault;
