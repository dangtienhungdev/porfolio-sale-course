import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { SidebarAdmin } from '../components';

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
};
const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#7dbcea',
};
const LayoutAdmin = () => {
	return (
		<Layout>
			<SidebarAdmin />
			<Layout>
				<Layout.Header style={headerStyle}>Header</Layout.Header>
				<Layout.Content style={contentStyle}>
					<Outlet />
				</Layout.Content>
				<Layout.Footer style={footerStyle}>Footer</Layout.Footer>
			</Layout>
		</Layout>
	);
};

export default LayoutAdmin;
