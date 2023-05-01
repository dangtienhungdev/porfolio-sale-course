import '../style.scss';

import { Button, Carousel, Form, Image, Select, Space, Tag, Typography, message } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

import { ColumnsType } from 'antd/es/table';
import { IFood } from '../../../interfaces/foods.type';
import LayoutModule from '../../../modules/LayoutModule';
import { Link } from 'react-router-dom';
import ModalAdd from './components/ModalAdd';
import { fomatCurrent } from '../../../utils/fomatterCurrent';
import { getAllFoods } from '../../../API/foods';
import { useToggleValue } from '../../../hooks/useToggleValue';

const ManagerFoods = () => {
	const options = [
		{ value: 'active', label: 'active' },
		{ value: 'in-active', label: 'in-active' },
	];
	const handleChange = (value: { value: string; label: React.ReactNode }) => {
		try {
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
							<div key={image} className="image-container">
								<Image src={image} alt="images" className="image" />
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
			render: (_: number, record: IFood) => (
				<Typography.Text>{fomatCurrent(record.priceOriginal)}đ</Typography.Text>
			),
		},
		{
			title: 'Price Sales',
			dataIndex: 'price',
			key: 'price',
			render: (_: number, record: IFood) => (
				<Typography.Text>{fomatCurrent(record.price)}đ</Typography.Text>
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
								onChange={handleChange}
								defaultValue={{ value: 'active', label: 'active' }}
							/>
						</Form.Item>
					</Form>
				</>
			),
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: 'Action',
			dataIndex: 'action',
			key: 'action',
			fixed: 'right',
			width: 100,
			render: (_: string, recored: IFood) => (
				<Space>
					<Button>
						<EyeOutlined />
					</Button>
					<Link to={`/admin/foods/edit/${recored._id}`}>
						<Button type="primary">
							<EditOutlined />
						</Button>
					</Link>
					<Button>
						<DeleteOutlined />
					</Button>
				</Space>
			),
		},
	];
	/* useState */
	const [foods, setFoods] = useState<IFood[]>([]);
	const { toggleValue: isOpenModalAdd, handleToggleValue: setIsOpenAdd } = useToggleValue();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAllFoods();
				if (response) {
					setFoods(response.docs?.map((item: IFood) => ({ ...item, key: item._id })));
				}
			} catch (error) {
				message.error('Lấy sản phẩm thất bại');
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<LayoutModule
				heading="sản phẩm"
				dataSource={foods}
				columns={columns}
				setIsOpenAdd={setIsOpenAdd}
				scroll={{ x: 1500 }}
			/>
			<ModalAdd isOpenModalAdd={isOpenModalAdd} setIsOpenAdd={setIsOpenAdd} />
		</>
	);
};

export default ManagerFoods;
