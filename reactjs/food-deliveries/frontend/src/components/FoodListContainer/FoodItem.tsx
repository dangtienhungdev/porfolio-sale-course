import { Button, Card, Col, Image, Row, Typography } from 'antd';

import { IFood } from '../../interfaces/foods.type';
import { fomatCurrent } from '../../utils/fomatterCurrent';

const FoodItem = ({ foodList }: any) => {
	return (
		<>
			{foodList.length > 0 &&
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
								/>
								<Row style={{ padding: '15px' }}>
									<Col span={24}>
										<Typography.Text className="food-heading">{item.name}</Typography.Text>
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
										<Button type="primary" className="food-btn">
											Add To Cart
										</Button>
									</Col>
								</Row>
							</Card>
						</Col>
					);
				})}
		</>
	);
};

export default FoodItem;
