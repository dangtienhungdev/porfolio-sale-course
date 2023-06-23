import { CalendarOutlined, MailOutlined } from '@ant-design/icons';

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
	getItem('Navigation One', '1', <MailOutlined />),
	getItem('Navigation Two', '2', <CalendarOutlined />),
];
