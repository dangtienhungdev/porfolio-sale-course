import { Button, Popconfirm, Space, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteCategory, getAllCategories, searchCategory } from '../../../API/category';
import { useEffect, useState } from 'react';

import { ColumnsType } from 'antd/es/table';
import { ICategories } from '../../../interfaces/categories.type';
import LayoutModule from '../../../modules/LayoutModule';
import ModalCategory from './components/ModalCategory';

const ManagerCategories = () => {
	/* useState */
	const [categories, setCategories] = useState<ICategories[]>([]);
	const [search, setSearch] = useState<string>('');
	const [openModal, setOpenModal] = useState({
		isOpenModalAdd: false,
		isOpenModalEdit: false,
		isOpenModalView: false,
	});
	const [categoryEdit, setCategoryEdit] = useState<ICategories>();
	/* table antd */
	const columns: ColumnsType<ICategories> = [
		{ title: 'Name', dataIndex: 'name', key: 'name' },
		{ title: 'Slug', dataIndex: 'slug', key: 'slug' },
		{
			title: 'Action',
			dataIndex: 'action',
			key: 'action',
			render: (_: string, record: ICategories) => {
				return (
					<Space>
						<Button type="primary" onClick={() => handleEdit(record)}>
							<EditOutlined />
						</Button>
						<Popconfirm
							placement="topLeft"
							title={'Are you sure to delete this food?'}
							onConfirm={() => handleDelete(record._id)}
							okText="Yes"
							cancelText="No"
						>
							<Button>
								<DeleteOutlined />
							</Button>
						</Popconfirm>
					</Space>
				);
			},
		},
	];
	/* handleEdit */
	const handleEdit = (record: ICategories) => {
		setOpenModal((pre) => ({
			...pre,
			isOpenModalEdit: true,
		}));
		setCategoryEdit(record);
	};
	/* useEffect */
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = search ? await searchCategory(search) : await getAllCategories();
				if (response && response.data) {
					setCategories(
						response.data.docs.map((category: ICategories) => ({ ...category, key: category._id }))
					);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchCategories();
	}, [search]);
	const handleDelete = async (id: string) => {
		try {
			const data = await deleteCategory(id);
			if (data) {
				message.success('Xóa danh mục thành công');
				setCategories((pre) => pre.filter((category) => category._id !== id));
			}
		} catch (error) {
			message.error('Xóa danh mục thất bại');
		}
	};
	return (
		<>
			<LayoutModule
				heading="category"
				columns={columns}
				dataSource={categories}
				setOpenModal={setOpenModal}
				setSearch={setSearch}
				pageSize={5}
			/>
			<ModalCategory
				openModal={openModal}
				setOpenModal={setOpenModal}
				categoryEdit={categoryEdit}
				setCategories={setCategories}
			/>
		</>
	);
};

export default ManagerCategories;
