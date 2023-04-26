import { Layout } from 'antd';

const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#3ba0e9',
};
const SidebarAdmin = () => {
	return (
		<Layout.Sider width={260} style={siderStyle}>
			Sider
		</Layout.Sider>
	);
};

export default SidebarAdmin;
