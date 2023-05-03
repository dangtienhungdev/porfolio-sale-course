import { Button, Col, Input, Row, Table, Typography } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

interface PropTypes {
	heading: string;
	dataSource: any;
	columns: any;
	scroll?: { x?: number; y?: number };
	pageSize?: number;
	setOpenModal: React.Dispatch<
		React.SetStateAction<{
			isOpenModalAdd: boolean;
			isOpenModalEdit: boolean;
			isOpenModalView: boolean;
		}>
	>;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const LayoutModule = ({
	heading,
	dataSource,
	columns,
	setOpenModal,
	scroll,
	pageSize = 10,
	setSearch,
}: PropTypes) => {
	return (
		<div className="layout-container">
			<Row>
				<Col span={24}>
					<Typography.Title level={3}>Quản lý danh sách {heading}</Typography.Title>
				</Col>
				<Col span={24}>
					<Row>
						<Col span={16}>
							<Button
								type="primary"
								className="btn-primary"
								onClick={() =>
									setOpenModal((pre) => ({
										...pre,
										isOpenModalAdd: true,
									}))
								}
							>
								<PlusOutlined />
								Thêm {heading}
							</Button>
						</Col>
						<Col span={8}>
							<Input
								placeholder={`Tìm kiếm ${heading}`}
								onChange={(e) => setSearch(e.target.value)}
								prefix={<SearchOutlined />}
							/>
						</Col>
					</Row>
				</Col>
				<Col span={24} className="layout-space-sm">
					<Table
						dataSource={dataSource}
						columns={columns}
						scroll={scroll}
						pagination={{
							pageSize: pageSize,
							showTotal: (total: number, range: number[]) =>
								`${range[0]} - ${range[1]} của ${total}`,
						}}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default LayoutModule;
