import { Button, Card, Col, Image, Row, Typography } from 'antd';

const FoodItem = () => {
	return (
		<>
			{Array(5)
				.fill(0)
				.map((item) => (
					<Col span={8} key={Math.random()}>
						<Card hoverable bordered={false} className="food-container">
							<Image
								src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
								alt="foods"
								preview={false}
								className="food-item"
							/>
							<Row style={{ padding: '15px' }}>
								<Col span={24}>
									<Typography.Text className="food-heading">Panera Soup</Typography.Text>
								</Col>
								<Col span={24}>
									<div className="food-footer">
										<Typography.Text className="food-category">Fast-Food</Typography.Text>
										<Typography.Text className="food-price">&39</Typography.Text>
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
				))}
		</>
	);
};

export default FoodItem;
