import './style.scss';

import { AppstoreOutlined, HomeOutlined, ShopOutlined } from '@ant-design/icons';

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

const itemsMenuAdmin = [
	{
		label: (
			<Link
				to="/admin/dashboard"
				style={{
					fontSize: '24px',
					textAlign: 'center',
					alignItems: 'center',
					width: '100%',
					height: '64px',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				Food Delivery
			</Link>
		),
		key: 'logo',
	},
	{
		label: <Link to="/admin/dashboard">Dashboard</Link>,
		icon: <AppstoreOutlined />,
		key: 'dashboard',
	},
	{
		label: 'Foods',
		icon: <AppstoreOutlined />,
		key: 'foods',
		children: [
			{
				label: <Link to="/admin/food/add">Add food</Link>,
				icon: <AppstoreOutlined />,
				key: 'AddFood',
			},
			{
				label: <Link to="/admin/foods">Manager Food</Link>,
				icon: <AppstoreOutlined />,
				key: 'ManagerFoods',
			},
		],
	},
	{
		label: 'Orders',
		icon: <AppstoreOutlined />,
		key: 'Orders',
		children: [
			{
				label: <Link to="/admin/orders">Manager Order</Link>,
				icon: <AppstoreOutlined />,
				key: 'ManagerOrders',
			},
		],
	},
	{
		label: 'Categories',
		icon: <AppstoreOutlined />,
		key: 'categories',
		children: [
			{
				label: <Link to="/admin/category/add">Add Category</Link>,
				icon: <AppstoreOutlined />,
				key: 'AddCategory',
			},
			{
				label: <Link to="/admin/categories">Manager Categories</Link>,
				icon: <AppstoreOutlined />,
				key: 'ManagerCategorys',
			},
		],
	},
	{
		label: 'Users',
		icon: <AppstoreOutlined />,
		key: 'Users',
		children: [
			{
				label: <Link to="/admin/user/add">Add User</Link>,
				icon: <AppstoreOutlined />,
				key: 'AddUser',
			},
			{
				label: <Link to="/admin/users">Manager User</Link>,
				icon: <AppstoreOutlined />,
				key: 'ManagerUsers',
			},
		],
	},
	{
		label: 'Reviews',
		icon: <AppstoreOutlined />,
		key: 'Reviews',
		children: [
			{
				label: <Link to="/admin/review/add">Add views</Link>,
				icon: <AppstoreOutlined />,
				key: 'AddReview',
			},
			{
				label: <Link to="/admin/reviews">Manager Review</Link>,
				icon: <AppstoreOutlined />,
				key: 'ManagerReviews',
			},
		],
	},
	{
		label: 'Payments',
		icon: <AppstoreOutlined />,
		key: 'Payments',
		children: [
			{
				label: <Link to="/admin/payments">Manager Payment</Link>,
				icon: <AppstoreOutlined />,
				key: 'ManagerPayments',
			},
		],
	},
];

export const itemsNoUser: MenuItem[] = itemsData.map((item) => getItem(item));
export const itemSiderMenuAdmin: MenuItem[] = itemsMenuAdmin.map((item) => getItem(item));
