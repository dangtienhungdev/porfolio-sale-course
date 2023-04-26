import './style.scss';

import { Col, Dropdown, Image, Layout, MenuProps, Row } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

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
			<Link to="#">
				<LogoutOutlined />
				Log out
			</Link>
		),
	},
];
const Header = () => {
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
