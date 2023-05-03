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
	message,
} from 'antd';
import {
	CLOUD_NAME,
	FOLDER_NAME,
	UPLOAD_PRESET,
	uploadImage,
} from '../../../../config/clouddinary';
import Upload, { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import { createFood, updateFood } from '../../../../API/foods';
import { useEffect, useState } from 'react';

import { ICategories } from '../../../../interfaces/categories.type';
import { IFood } from '../../../../interfaces/foods.type';
import { PlusOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import { getAllCategories } from '../../../../API/category';

interface ModalPropType {
	openModal: {
		isOpenModalAdd: boolean;
		isOpenModalEdit: boolean;
		isOpenModalView: boolean;
	};
	setOpenModal: React.Dispatch<
		React.SetStateAction<{
			isOpenModalAdd: boolean;
			isOpenModalEdit: boolean;
			isOpenModalView: boolean;
		}>
	>;
	foodEdit?: IFood | null;
	foodView?: IFood | null;
}
const getBase64 = (file: RcFile): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});
const ModalFood = ({ openModal, setOpenModal, foodEdit, foodView }: ModalPropType) => {
	/* useState */
	const [checked, setChecked] = useState('active');
	const [categories, setCategories] = useState<ICategories[]>();
	const [description, setDescription] = useState<string>('');
	const [images, setImages] = useState<string[]>([]);
	const [form] = Form.useForm();
	// Đặt giá trị mặc định cho các trường trong form
	useEffect(() => {
		form.setFieldsValue({
			name: foodEdit?.name,
			price: foodEdit?.price,
			priceOriginal: foodEdit?.priceOriginal,
			categoryId: foodEdit?.categoryId?._id,
			description: foodEdit?.description,
		});
	}, [form, foodEdit]);
	/* handleChecked */
	const onChangeChecked = (e: RadioChangeEvent) => {
		setChecked(e.target.value);
	};
	/* upload image */
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState<UploadFile[]>((foodEdit?.images as any) || []);
	const handleCancel = () => setPreviewOpen(false);
	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as RcFile);
		}
		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
		setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
	};
	const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	};
	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);
	/* handle Cancel */
	const handleCancelBtn = () => {
		setOpenModal({
			isOpenModalAdd: false,
			isOpenModalEdit: false,
			isOpenModalView: false,
		});
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAllCategories();
				if (response && response.data) {
					setCategories(response.data.docs);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	/* submit form */
	const onFinish = async (values: IFood) => {
		try {
			const dataValue = {
				...values,
				images: images,
				is_active: checked === 'active' ? true : false,
			};
			const data = await createFood(dataValue);
			if (data) {
				message.success('Thêm món ăn thành công!');
				handleCancelBtn();
			}
		} catch (error) {
			message.error('Thêm món ăn thất bại!');
		}
	};
	const onFinishEdit = async (values: IFood) => {
		try {
			if (!foodEdit?._id) return message.error('Edit món ăn thất bại!');
			let dataValue: IFood;
			if (values.images !== undefined) {
				dataValue = {
					...values,
					_id: foodEdit?._id,
					images: images,
					is_active: checked === 'active' ? true : false,
				};
			} else {
				dataValue = {
					...values,
					_id: foodEdit?._id,
					images: foodEdit?.images,
					is_active: checked === 'active' ? true : false,
				};
			}
			const data = await updateFood(dataValue);
			if (data) {
				message.success('Edit món ăn thành công!');
				handleCancelBtn();
			}
		} catch (error) {
			message.error('Edit món ăn thất bại!');
		}
	};
	const handleUpload = async (file: RcFile) => {
		if (file) {
			try {
				const formData = new FormData();
				formData.append('file', file);
				formData.append('upload_preset', UPLOAD_PRESET);
				formData.append('folder', FOLDER_NAME);
				const data = await uploadImage(formData);
				if (data) {
					setImages((pre: any) => [...pre, data.url]);
				}
			} catch (error) {
				message.error('Upload hình ảnh thất bại!');
			}
		}
	};
	const handleBeforeUpload = (file: RcFile) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			message.error('Chỉ hỗ trợ upload file JPG/PNG');
			return false;
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Kích thước ảnh phải nhỏ hơn 2MB');
			return false;
		}
		handleUpload(file);
		return false;
	};
	if (!categories) return <div>loading</div>;
	if (openModal.isOpenModalAdd) {
		return (
			<Modal
				title="Thêm món ăn"
				open={openModal.isOpenModalAdd}
				onCancel={() => handleCancelBtn()}
				style={{ top: '20px' }}
				footer={null}
				width={960}
			>
				<Form layout="vertical" autoComplete="off" onFinish={onFinish}>
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
								name="priceOriginal"
								rules={[{ required: true, message: 'Không được bỏ trống' }]}
							>
								<InputNumber placeholder="Giá gốc" style={{ width: '100%' }} />
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label="Giá khuyến mại"
								name="price"
								rules={[
									{ required: true, message: 'Không được bỏ trống' },
									({ getFieldValue }) => ({
										validator(_, value) {
											const priceOriginal = getFieldValue('priceOriginal');
											if (value && priceOriginal && value >= priceOriginal) {
												return Promise.reject(new Error('Giá khuyến mại phải nhỏ hơn giá gốc'));
											}
											return Promise.resolve();
										},
									}),
								]}
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
								<Select placeholder="Chọn menu món ăn">
									{categories.length > 0 &&
										categories.map((category: ICategories) => (
											<Select.Option key={category._id} value={category._id}>
												{category.name}
											</Select.Option>
										))}
								</Select>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item label="Active">
								<Radio.Group value={checked} name="is_active" onChange={onChangeChecked}>
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
									action={`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`}
									listType="picture-card"
									fileList={fileList}
									onPreview={handlePreview}
									multiple={true}
									beforeUpload={handleBeforeUpload}
									onChange={(info) => handleChange(info)}
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
									<Button onClick={() => handleCancelBtn()}>Hủy</Button>
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
	}
	if (openModal.isOpenModalView) {
		return (
			<Modal
				title="Xem chi tiết món ăn"
				open={openModal.isOpenModalView}
				onCancel={() => handleCancelBtn()}
				style={{ top: '20px' }}
				footer={null}
				width={'100%'}
			></Modal>
		);
	}
	return (
		<Modal
			title="Sửa món ăn"
			open={openModal.isOpenModalEdit}
			onCancel={() => handleCancelBtn()}
			style={{ top: '20px' }}
			footer={null}
			width={960}
		>
			<Form layout="vertical" form={form} autoComplete="off" onFinish={onFinishEdit}>
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
							name="priceOriginal"
							rules={[{ required: true, message: 'Không được bỏ trống' }]}
						>
							<InputNumber placeholder="Giá gốc" style={{ width: '100%' }} />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							label="Giá khuyến mại"
							name="price"
							rules={[
								{ required: true, message: 'Không được bỏ trống' },
								({ getFieldValue }) => ({
									validator(_, value) {
										const priceOriginal = getFieldValue('priceOriginal');
										if (value && priceOriginal && value >= priceOriginal) {
											return Promise.reject(new Error('Giá khuyến mại phải nhỏ hơn giá gốc'));
										}
										return Promise.resolve();
									},
								}),
							]}
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
							<Select placeholder="Chọn menu món ăn">
								{categories.length > 0 &&
									categories.map((category: ICategories) => (
										<Select.Option key={category._id} value={category._id}>
											{category.name}
										</Select.Option>
									))}
							</Select>
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Active">
							<Radio.Group value={checked} name="is_active" onChange={onChangeChecked}>
								<Radio value={'active'}>Active</Radio>
								<Radio value={'inactive'}>InActive</Radio>
							</Radio.Group>
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item label="Hình ảnh" name="images">
							<Upload
								action={`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`}
								listType="picture-card"
								fileList={fileList}
								onPreview={handlePreview}
								multiple={true}
								beforeUpload={handleBeforeUpload}
								onChange={(info) => handleChange(info)}
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
								<Button onClick={() => handleCancelBtn()}>Hủy</Button>
							</Form.Item>
							<Form.Item>
								<Button type="primary" className="btn-primary" htmlType="submit">
									Sửa
								</Button>
							</Form.Item>
						</div>
					</Col>
				</Row>
			</Form>
		</Modal>
	);
};

export default ModalFood;
