import './style.scss';

import { HomeOutlined, ShopOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { MenuProps } from 'antd';

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

const styleLink: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const styleIcon: React.CSSProperties = {
	fontSize: '24px',
};

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
];

export const itemsNoUser: MenuItem[] = itemsData.map((item) => getItem(item));
