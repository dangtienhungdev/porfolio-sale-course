import './style.scss';

import { Button, Card, Col, Divider, Image, Row, Space, Typography } from 'antd';

import IconLocation from '../icons/IconLocation';

const styleMyOrder = {
	backgroundColor: '#F5F5F5',
};

const MyOrder = () => {
	return (
		<Row style={styleMyOrder} className="container">
			<Col span={24}>
				<Typography.Title level={3} style={{ color: '#FF5C28' }}>
					My Order
				</Typography.Title>
				<Typography.Text>Delivery address</Typography.Text>
				<Row>
					<Col span={16}>
						<Typography.Text style={{ marginTop: '2px', fontSize: '20px', fontWeight: 'bold' }}>
							1342 Morris Street
						</Typography.Text>
					</Col>
					<Col span={8}>
						<div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF5C28' }}>
							<IconLocation /> <span style={{ fontSize: '20px', color: '#FF5C28' }}>5km</span>
						</div>
					</Col>
				</Row>
			</Col>
			<Col span={24} style={{ margin: '26px 0', height: '100%' }}>
				<Row gutter={[16, 16]}>
					<Col span={24}>
						<Card hoverable className="card-container">
							<Row gutter={16}>
								<Col span={10}>
									<Image
										className="image"
										preview={false}
										src="https://daylambanh.edu.vn/wp-content/uploads/2017/08/cach-lam-banh-hamburger-bo-600x400.jpg"
									/>
								</Col>
								<Col span={14}>
									<div className="card-body">
										<div className="card-body__heading">
											<Typography.Text ellipsis className="card-title">
												Burger Mozza XL
											</Typography.Text>
											<p>1 x $ 100</p>
										</div>
										<div className="card-body__quantity">
											<Space>
												<Button>-</Button>
												<Button>1</Button>
												<Button>+</Button>
											</Space>
										</div>
									</div>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Col>
			<Divider />
			<Col span={24}>
				<Row>
					<Col span={16}>
						<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
							Sub Total
						</Typography.Text>
					</Col>
					<Col span={8}>
						<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
							<span style={{ fontSize: '20px', color: '#FF5C28' }}>$ 100</span>
						</Typography.Text>
					</Col>
				</Row>
				<Row>
					<Col span={16}>
						<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
							Delivery Fee
						</Typography.Text>
					</Col>
					<Col span={8}>
						<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
							<span style={{ fontSize: '20px', color: '#FF5C28' }}>$ 100</span>
						</Typography.Text>
					</Col>
				</Row>
				<Divider />
				<Row>
					<Col span={16}>
						<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>Total</Typography.Text>
					</Col>
					<Col span={8}>
						<Typography.Text style={{ marginTop: '2px', fontSize: '20px' }}>
							<span style={{ fontSize: '20px', color: '#FF5C28' }}>$ 200</span>
						</Typography.Text>
					</Col>
				</Row>
				<Row style={{ marginTop: '20px' }}>
					<Col span={24}>
						<Button style={{ width: '100%', backgroundColor: '#FF5C28' }} type="primary">
							Check Out
						</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default MyOrder;
