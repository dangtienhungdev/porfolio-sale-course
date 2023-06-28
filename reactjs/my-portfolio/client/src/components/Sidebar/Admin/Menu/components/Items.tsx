import { CalendarOutlined, MailOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd/es/menu';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key?: React.Key | null,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

export const items: MenuItem[] = [
	getItem(
		<Link to="/admin/projects" className="flex text-start">
			Manager Projects
		</Link>,
		'projects',
		<MailOutlined />
	),
	getItem(
		<Link to="/admin/users" className="flex text-start">
			Manager Users
		</Link>,
		'users',
		<CalendarOutlined />
	),
	getItem(
		<Link to="/admin/categories" className="flex text-start">
			Manager Categories
		</Link>,
		'categories',
		<CalendarOutlined />
	),
];
