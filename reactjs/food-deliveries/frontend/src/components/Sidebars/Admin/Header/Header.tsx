import './style.scss';

import { Col, Dropdown, Image, Layout, MenuProps, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';

import { RootState } from '../../../../redux/store';
import { createAxios } from '../../../../config/intance';
import { loginSuccess } from '../../../../redux/reducers/authSlice';
import { logoutUser } from '../../../../redux/actions/authAction';
import { useEffect } from 'react';

const Header = () => {
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
	const items: MenuProps['items'] = [
		{
			key: 'my-info',
			label: (
				<Link to="/admin/me">
					<UserOutlined />
					My Infomation
				</Link>
			),
		},
		{
			key: 'change-password',
			label: <Link to="/admin/change-password">Change Password</Link>,
		},
		{
			key: 'logout',
			label: (
				<Link to="#" onClick={() => handleLogout()}>
					<LogoutOutlined />
					Log out
				</Link>
			),
		},
	];
	return (
		<Layout.Header className="header-container">
			<Row>
				<Col span={24} className="header-info">
					<Dropdown menu={{ items }} placement="bottomRight" arrow>
						<Image
							src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
							alt="image"
							className="header-info__avatar"
							preview={false}
						/>
					</Dropdown>
				</Col>
			</Row>
		</Layout.Header>
	);
};

export default Header;
