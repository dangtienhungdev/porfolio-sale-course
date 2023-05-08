import { Button, Card, Col, Image, Rate, Row, Typography, message } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { IFood } from '../../interfaces/foods.type';
import { NotFound } from '../../views';
import { RootState } from '../../redux/store';
import { addOrderFood } from '../../redux/reducers/orderSlice';
import { fomatCurrent } from '../../utils/fomatterCurrent';
import { useState } from 'react';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const FoodItem = ({ foodList, onClose, setFoodItem }: any) => {
	const dispatch = useAppDispatch();
	const { currentUser }: any = useAppSelector((state: RootState) => state.auth.login);
	/* useState */
	const [isCheck, setIsCheck] = useState<boolean>(false);

	const handleFoodItem = (item: IFood) => {
		setFoodItem(item);
		onClose();
	};
	/* rating */
	const [value, setValue] = useState(6);
	/* add to cart */
	const handleAddCart = (item: IFood) => {
		if (!currentUser) {
			message.error('Bạn cần đăng nhập để thực hiện chức năng này');
		} else {
			if (item.price === 0 || item.price === undefined) {
				item = { ...item, price: item.priceOriginal };
			} else {
				item = { ...item, price: item.price };
			}
			dispatch(addOrderFood({ ...item, amount: 1, totalPrice: item.price }));
		}
	};
	if (!foodList) return <NotFound />;
	return (
		<>
			{foodList &&
				foodList.length > 0 &&
				foodList.map((item: IFood) => {
					return (
						<Col span={8} key={item._id}>
							<Card hoverable bordered={false} className="food-container">
								<Image
									src={`${item.images[0]}`}
									alt={item.name}
									preview={false}
									className="food-item"
									style={{ width: '100%' }}
									onClick={() => handleFoodItem(item)}
								/>
								<Row style={{ padding: '15px' }}>
									<Col span={24}>
										<Typography.Text className="food-heading" onClick={() => handleFoodItem(item)}>
											{item.name}
										</Typography.Text>
									</Col>
									<Col span={24}>
										<div className="food-footer">
											<Typography.Text className={`food-category`}>
												{item.categoryId.name}
											</Typography.Text>
											<div>
												<Typography.Text
													className={`food-price ${item.price ? 'food-price-line-throungh' : ''}`}
												>
													{fomatCurrent(item.priceOriginal)}đ
												</Typography.Text>
												{(item.price !== undefined || item.price !== 0) && (
													<Typography.Text
														className={`food-price-sale ${
															item.price === undefined || item.price === 0 ? 'none' : ''
														}`}
													>
														{fomatCurrent(item.price)}đ
													</Typography.Text>
												)}
											</div>
										</div>
									</Col>
									<Col span={24}>
										<span>
											<Rate
												tooltips={desc}
												onChange={setValue}
												value={value}
												style={{ fontSize: '14px' }}
											/>
										</span>
									</Col>
									<Col span={24}>
										<Button type="primary" className="food-btn" onClick={() => handleAddCart(item)}>
											Add To Cart
										</Button>
									</Col>
								</Row>
								<div
									className={`food-heart ${isCheck ? 'active' : ''}`}
									onClick={() => setIsCheck(!isCheck)}
								>
									{isCheck ? <HeartFilled /> : <HeartOutlined />}
								</div>
								{item.price !== undefined && item.price !== 0 && (
									<div className="food-percent">
										<span>{currentPercent(item.price, item.priceOriginal)}%</span>
									</div>
								)}
							</Card>
						</Col>
					);
				})}
		</>
	);
};

const currentPercent = (price: number, priceOriginal: number) => {
	return Math.ceil(((priceOriginal - price) / priceOriginal) * 100);
};

export default FoodItem;
