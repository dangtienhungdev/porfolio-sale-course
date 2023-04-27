import './style.scss';
import 'react-quill/dist/quill.snow.css';

import {
	Button,
	Col,
	Form,
	Input,
	InputNumber,
	Modal,
	Radio,
	RadioChangeEvent,
	Row,
	Select,
} from 'antd';
import Upload, { RcFile, UploadFile, UploadProps } from 'antd/es/upload';

import { PlusOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import { useState } from 'react';

interface ModalPropType {
	isOpenModalAdd: boolean;
	setIsOpenAdd: () => void;
}
const getBase64 = (file: RcFile): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});
const ModalAdd = ({ isOpenModalAdd, setIsOpenAdd }: ModalPropType) => {
	/* useState */
	const [checked, setChecked] = useState('active');
	const [description, setDescription] = useState<string>('');
	/* handleChecked */
	const onChangeChecked = (e: RadioChangeEvent) => {
		setChecked(e.target.value);
	};
	/* upload image */
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>([
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
		{
			uid: '-2',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
		{
			uid: '-3',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
	]);
	const handleCancel = () => setPreviewOpen(false);
	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as RcFile);
		}
		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
		setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
	};
	const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
		setFileList(newFileList);
	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);
	/* handle Cancel */
	const handleCancelBtn = () => {
		setIsOpenAdd();
	};
	return (
		<Modal
			title="Thêm món ăn"
			open={isOpenModalAdd}
			onCancel={() => handleCancelBtn()}
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
							label="Giá gốc"
							name="namepriceOriginal"
							rules={[{ required: true, message: 'Không được bỏ trống' }]}
						>
							<InputNumber placeholder="Giá gốc" style={{ width: '100%' }} />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							label="Giá khuyến mại"
							name="price"
							rules={[{ required: true, message: 'Không được bỏ trống' }]}
						>
							<InputNumber placeholder="Giá khuyến mại" style={{ width: '100%' }} />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							label="Category"
							name="categoryId"
							rules={[{ required: true, message: 'Không được bỏ trống' }]}
						>
							<Select>
								<Select.Option value="1">1</Select.Option>
							</Select>
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Active">
							<Radio.Group value={checked} onChange={onChangeChecked}>
								<Radio value={'active'}>Active</Radio>
								<Radio value={'inactive'}>InActive</Radio>
							</Radio.Group>
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item
							label="Hình ảnh"
							name="images"
							rules={[{ required: true, message: 'Không được để trống' }]}
						>
							<Upload
								action="http://localhost:8080/api/v1/uploads"
								listType="picture-card"
								fileList={fileList}
								onPreview={handlePreview}
								onChange={handleChange}
							>
								{fileList.length >= 8 ? null : uploadButton}
							</Upload>
						</Form.Item>
						<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
							<img alt="example" style={{ width: '100%' }} src={previewImage} />
						</Modal>
					</Col>
					<Col span={24}>
						<Form.Item
							label="Mô tả sản phẩm"
							name="description"
							rules={[{ required: true, message: 'Không được để trống' }]}
						>
							<ReactQuill theme="snow" value={description} onChange={setDescription} />
						</Form.Item>
					</Col>
					<Col span={24}>
						<div className="btn-container">
							<Form.Item>
								<Button onClick={() => handleCancel()}>Hủy</Button>
							</Form.Item>
							<Form.Item>
								<Button type="primary" className="btn-primary" htmlType="submit">
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
