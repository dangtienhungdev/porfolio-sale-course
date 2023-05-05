import './style.scss';

import { Button, Carousel, Col, Drawer, Image, Row, Typography } from 'antd';

import { IFood } from '../../interfaces/foods.type';
import { NotFound } from '../../views';
import { fomatCurrent } from '../../utils/fomatterCurrent';
import parse from 'html-react-parser';

interface Props {
	open: boolean;
	onClose: () => void;
	foodItem: IFood;
}

const DrawerFood = ({ open, onClose, foodItem }: Props) => {
	if (!foodItem) return <NotFound />;
	console.log('🚀 ~ file: DrawerFood.tsx:11 ~ DrawerFood ~ foodItem:', foodItem);
	return (
		<Drawer
			width={640}
			title={foodItem.name}
			placement="right"
			closable={false}
			onClose={onClose}
			open={open}
			style={{ textTransform: 'capitalize' }}
		>
			<div className="food-item-container">
				<Row className="">
					<Col span={24}>
						<Carousel autoplay>
							{foodItem &&
								foodItem?.images?.map((item: string) => (
									<div key={item} className="food-img-container">
										<Image
											src={item}
											alt={foodItem.name}
											preview={false}
											className="food-img-item"
										/>
									</div>
								))}
						</Carousel>
					</Col>
					<Col span={24}>
						<Typography.Text className="food-body-heading">{foodItem.name}</Typography.Text>
						<div>
							<Typography.Text
								className={`food-price ${foodItem.price ? 'food-price-line-throungh' : ''}`}
							>
								{fomatCurrent(foodItem.priceOriginal)}đ
							</Typography.Text>
							{(foodItem.price !== undefined || foodItem.price !== 0) && (
								<Typography.Text
									className={`food-price-sale ${
										foodItem.price === undefined || foodItem.price === 0 ? 'none' : ''
									}`}
								>
									{fomatCurrent(foodItem.price)}đ
								</Typography.Text>
							)}
						</div>
						{foodItem.description && (
							<Typography.Text>{parse(foodItem.description)}</Typography.Text>
						)}
					</Col>
					<div className="food-item-footer">
						<Row gutter={16}>
							<Col span={12}>
								<Button type="primary">Mua ngay</Button>
							</Col>
							<Col span={12}>
								<Button type="primary">Giỏ hàng</Button>
							</Col>
						</Row>
					</div>
				</Row>
			</div>
		</Drawer>
	);
};

export default DrawerFood;
