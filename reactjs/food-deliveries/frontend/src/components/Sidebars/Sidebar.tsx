import './style.scss';

import {
	HeartOutlined,
	HomeOutlined,
	LogoutOutlined,
	ShopOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';

import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { itemsNoUser } from '../../routes/MenuItems';
import { useAppSelector } from '../../redux/hooks';

// import { items } from '../../routes/MenuItems';

const styleMenu: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '20px',
	alignItems: 'center',
	height: '100%',
	width: '96px',
	backgroundColor: '#F3F3F3',
	position: 'fixed',
	top: 0,
	left: 0,
	bottom: 0,
};
const styleLink: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};
const styleIcon: React.CSSProperties = {
	fontSize: '24px',
};

interface MenuItemProps {
	label?: React.ReactNode;
	key: React.Key;
	icon?: React.ReactNode;
	children?: MenuItem[];
	type?: 'group';
}

type MenuItem = Required<MenuProps>['items'][number];

const getItem = ({ label, key, icon, children, type }: MenuItemProps): MenuItem => ({
	key,
	icon,
	children,
	label,
	type,
});

type Props = {
	handleLogout: () => void;
};

const Sidebar = ({ handleLogout }: Props) => {
	/* redux */
	const { currentUser } = useAppSelector((state: RootState) => state.auth.login);

	/* item menu */
	const itemsData = [
		{
			label: (
				<Link to="/" style={styleLink}>
					<HomeOutlined style={styleIcon} />
				</Link>
			),
			key: 'dashboard',
		},
		{
			label: (
				<Link to="/foods" style={styleLink}>
					<ShopOutlined style={styleIcon} />
				</Link>
			),
			key: 'products',
		},
		{
			label: (
				<Link to="/hearts" style={styleLink}>
					<HeartOutlined style={styleIcon} />
				</Link>
			),
			key: 'hearts',
		},
		{
			label: (
				<Link to="/users" style={styleLink}>
					<UserOutlined style={styleIcon} />
				</Link>
			),
			key: 'users',
		},
		{
			label: (
				<Link to="#" style={styleLink} onClick={() => handleLogout()}>
					<LogoutOutlined style={styleIcon} />
				</Link>
			),
			key: 'logout',
		},
	];
	const items: MenuItem[] = itemsData.map((item) => getItem(item));
	/* redux */
	return (
		<Menu
			mode="inline"
			items={currentUser ? items : itemsNoUser}
			defaultSelectedKeys={['dashboard']}
			style={styleMenu}
		/>
	);
};

export default Sidebar;
