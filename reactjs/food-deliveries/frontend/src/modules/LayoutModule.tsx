import { Button, Col, Input, Row, Table, Typography } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

interface PropTypes {
	heading: string;
	dataSource: any;
	columns: any;
	setIsOpenAdd: () => void;
	scroll?: { x?: number; y?: number };
}

const LayoutModule = ({ heading, dataSource, columns, setIsOpenAdd, scroll }: PropTypes) => {
	return (
		<div className="layout-container">
			<Row>
				<Col span={24}>
					<Typography.Title level={3}>Quản lý danh sách {heading}</Typography.Title>
				</Col>
				<Col span={24}>
					<Row>
						<Col span={16}>
							<Button type="primary" className="btn-primary" onClick={() => setIsOpenAdd()}>
								<PlusOutlined />
								Thêm {heading}
							</Button>
						</Col>
						<Col span={8}>
							<Input placeholder={`Tìm kiếm ${heading}`} prefix={<SearchOutlined />} />
						</Col>
					</Row>
				</Col>
				<Col span={24} className="layout-space-sm">
					<Table dataSource={dataSource} columns={columns} scroll={scroll} />
				</Col>
			</Row>
		</div>
	);
};

export default LayoutModule;
