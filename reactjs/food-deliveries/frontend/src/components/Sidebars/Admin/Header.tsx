import { Layout } from 'antd';

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
};
const Header = () => {
	return <Layout.Header style={headerStyle}>Header</Layout.Header>;
};

export default Header;
