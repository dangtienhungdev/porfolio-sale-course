import { Button, Col, Form, Input, Row, message } from 'antd';
import { createCategory, getAllCategories, updateCategory } from '../../../../API/category';

import { ICategories } from '../../../../interfaces/categories.type';
import { useEffect } from 'react';

interface PropTypes {
	onCancel: () => void;
	categoryEdit?: ICategories;
	setCategories: React.Dispatch<React.SetStateAction<ICategories[]>>;
}

const FormCategory = ({ onCancel, categoryEdit, setCategories }: PropTypes) => {
	const [form] = Form.useForm();
	useEffect(() => {
		if (categoryEdit) {
			form.setFieldsValue({
				name: categoryEdit.name,
			});
		}
		return () => {
			form.resetFields();
		};
	}, [form, categoryEdit]);
	/* submit form */
	const handleSuccess = () => {
		message.success(categoryEdit ? 'Sửa danh mục thành công' : 'Thêm danh mục thành công');
		fetchCategories();
		form.resetFields();
		onCancel();
	};
	const handleFailure = () => {
		message.error('Thêm danh mục thất bại');
	};
	const fetchCategories = async () => {
		const response = await getAllCategories();
		if (response) {
			setCategories(
				response.data.docs.map((category: ICategories) => ({ ...category, key: category._id }))
			);
		}
	};
	const onFinish = async (values: string) => {
		try {
			const data = categoryEdit
				? await updateCategory(categoryEdit._id, values)
				: await createCategory(values);
			if (data !== undefined) {
				handleSuccess();
			}
		} catch (error) {
			handleFailure();
		} finally {
			onCancel();
			form.resetFields();
		}
	};
	return (
		<Form layout="vertical" form={form} autoComplete="off" onFinish={onFinish}>
			<Row gutter={50}>
				<Col span={24}>
					<Form.Item
						label="Tên danh mục"
						name="name"
						rules={[{ required: true, message: 'Không được bỏ trống' }]}
					>
						<Input placeholder="Tên danh mục" />
					</Form.Item>
				</Col>
				<Col span={24}>
					<div className="btn-container">
						<Form.Item>
							<Button onClick={() => onCancel()}>Hủy</Button>
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Thêm danh mục
							</Button>
						</Form.Item>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default FormCategory;
