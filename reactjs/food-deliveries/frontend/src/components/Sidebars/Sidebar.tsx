import './style.scss';

import { Menu } from 'antd';
import { items } from '../../routes/MenuItems';

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

const Sidebar = () => {
	return <Menu mode="inline" items={items} defaultSelectedKeys={['dashboard']} style={styleMenu} />;
};

export default Sidebar;
