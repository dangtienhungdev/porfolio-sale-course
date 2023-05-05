import '../style.scss';

import {
	Button,
	Carousel,
	Form,
	Image,
	Popconfirm,
	Select,
	Space,
	Tag,
	Typography,
	message,
} from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { deleteFood, getAllFoods, searchFood, updateFood } from '../../../API/foods';
import { useEffect, useState } from 'react';

import { ColumnsType } from 'antd/es/table';
import { IFood } from '../../../interfaces/foods.type';
import LayoutModule from '../../../modules/LayoutModule';
import ModalFood from './components/Modal';
import { fomatCurrent } from '../../../utils/fomatterCurrent';

const ManagerFoods = () => {
	/* useState */
	const [foods, setFoods] = useState<IFood[]>([]);
	const [openModal, setOpenModal] = useState({
		isOpenModalAdd: false,
		isOpenModalEdit: false,
		isOpenModalView: false,
	});
	const [foodEdit, setFoodEdit] = useState<IFood | null>(null);
	const [foodView, setFoodView] = useState<IFood | null>(null);
	const [search, setSearch] = useState<string>('');
	const options = [
		{ value: 'active', label: 'active' },
		{ value: 'in-active', label: 'in-active' },
	];
	const handleChange = async ({ food, value }: { food: IFood; value: any }) => {
		try {
			const newActive = { is_active: value.value === 'active' ? true : false };
			const newFood = { ...food, ...newActive, categoryId: food.categoryId._id };
			const foodUpdate = await updateFood(newFood);
			if (foodUpdate) {
				const newFoods = foods.map((item) => {
					if (item._id === food._id) {
						return { ...item, is_active: newActive.is_active };
					}
					return item;
				});
				setFoods(newFoods);
				message.success('Cập nhập thông tin món ăn thành công!');
			}
		} catch (error) {
			message.error('Cập nhập thông tin món ăn thành công!');
		}
	};
	/* table antd */
	const columns: ColumnsType<IFood> = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			fixed: 'left',
			render: (name: string) => <Typography.Title level={5}>{name}</Typography.Title>,
		},
		{
			title: 'Images',
			dataIndex: 'images',
			key: 'images',
			render: (images: string[]) => {
				return (
					<Carousel autoplay>
						{images.map((image: string) => (
							<div
								key={image}
								className="image-container"
								style={{ height: '160px', width: '100%' }}
							>
								<Image
									src={image}
									alt="images"
									className="image"
									style={{ height: '160px', width: '100%' }}
								/>
							</div>
						))}
					</Carousel>
				);
			},
		},
		{
			title: 'Price Original',
			dataIndex: 'priceOriginal',
			key: 'priceOriginal',
			render: (priceOriginal: number) => (
				<Typography.Text>{fomatCurrent(priceOriginal)}đ</Typography.Text>
			),
		},
		{
			title: 'Price Sales',
			dataIndex: 'price',
			key: 'price',
			render: (priceSale: number) => (
				<Typography.Text>{fomatCurrent(priceSale) || 0}đ</Typography.Text>
			),
		},
		{
			title: 'Category',
			dataIndex: 'categoryId',
			key: 'categoryId',
			render: (_: string, record: IFood) => (
				<Typography.Text>{record.categoryId.name}</Typography.Text>
			),
		},
		{
			title: 'Active',
			dataIndex: 'is_active',
			key: 'is_active',
			render: (_: boolean, record: IFood) => (
				<>
					<Tag color={record.is_active === true ? '#FF5C28' : 'default'}>
						{record.is_active === true ? 'Active' : 'In-Active'}
					</Tag>
					<Form>
						<Form.Item>
							<Select
								labelInValue
								options={options}
								onChange={(value) => handleChange({ value, food: record })}
								placeholder="Tình trạng món ăn"
							/>
						</Form.Item>
					</Form>
				</>
			),
		},
		{
			title: 'Action',
			dataIndex: 'action',
			key: 'action',
			fixed: 'right',
			width: 100,
			render: (_: string, recored: IFood) => {
				return (
					<Space>
						<Button type="primary" onClick={() => handlePreview(recored)}>
							<EyeOutlined />
						</Button>
						<Button type="primary" onClick={() => handleEditFood(recored)}>
							<EditOutlined />
						</Button>
						<Popconfirm
							placement="topLeft"
							title={'Are you sure to delete this food?'}
							onConfirm={() => handleDelete(recored._id)}
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
	const handleEditFood = (food: IFood) => {
		setOpenModal({ ...openModal, isOpenModalEdit: true });
		setFoodEdit(food);
	};
	const handlePreview = (food: IFood) => {
		setOpenModal({ ...openModal, isOpenModalView: true });
		setFoodView(food);
	};
	const handleDelete = async (id: string) => {
		try {
			const data = await deleteFood(id);
			if (data) {
				const newFoods = foods.filter((item) => item._id !== id);
				setFoods(newFoods);
				message.success('Xóa món ăn thành công!');
			}
		} catch (error) {
			message.error('Xóa món ăn thất bại!');
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (search) {
					const data = await searchFood(search);
					if (data) {
						setFoods(data.docs?.map((item: IFood) => ({ ...item, key: item._id })));
					}
				} else {
					const response = await getAllFoods();
					if (response) {
						setFoods(response.docs?.map((item: IFood) => ({ ...item, key: item._id })));
					}
				}
			} catch (error) {
				message.error('Lấy sản phẩm thất bại');
			}
		};
		fetchData();
	}, [search]);
	return (
		<>
			<LayoutModule
				heading="sản phẩm"
				dataSource={foods}
				columns={columns}
				setOpenModal={setOpenModal}
				setSearch={setSearch}
				scroll={{ x: 1500 }}
				pageSize={5}
			/>
			<ModalFood
				openModal={openModal}
				setOpenModal={setOpenModal}
				foodEdit={foodEdit}
				foodView={foodView}
				setFoods={setFoods}
			/>
		</>
	);
};

export default ManagerFoods;
