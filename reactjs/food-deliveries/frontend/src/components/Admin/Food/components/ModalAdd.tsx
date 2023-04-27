import './style.scss';

import { Button, Col, Form, Input, Modal, Row } from 'antd';

interface ModalPropType {
	isOpenModalAdd: boolean;
	setIsOpenAdd: () => void;
}

const ModalAdd = ({ isOpenModalAdd, setIsOpenAdd }: ModalPropType) => {
	const handleCancel = () => {
		setIsOpenAdd();
	};
	return (
		<Modal
			title="Thêm món ăn"
			open={isOpenModalAdd}
			onCancel={() => handleCancel()}
			style={{ top: '20px' }}
			footer={null}
			width={960}
		>
			<Form layout="vertical" autoComplete="off">
				<Row gutter={50}>
					<Col span={8}>
						<Form.Item
							label="Tên sản phẩm"
							name="name"
							rules={[{ required: true, message: 'Không được bỏ trống' }]}
						>
							<Input placeholder="Tên sản phẩm" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							label="Tên sản phẩm"
							name="name"
							rules={[{ required: true, message: 'Không được bỏ trống' }]}
						>
							<Input placeholder="Tên sản phẩm" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							label="Tên sản phẩm"
							name="name"
							rules={[{ required: true, message: 'Không được bỏ trống' }]}
						>
							<Input placeholder="Tên sản phẩm" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<div className="btn-container">
							<Form.Item>
								<Button onClick={() => handleCancel()}>Hủy</Button>
							</Form.Item>
							<Form.Item>
								<Button type="primary" className="btn-primary">
									Thêm
								</Button>
							</Form.Item>
						</div>
					</Col>
				</Row>
			</Form>
		</Modal>
	);
};

export default ModalAdd;
