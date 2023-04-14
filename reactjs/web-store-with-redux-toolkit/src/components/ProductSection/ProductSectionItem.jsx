import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Tooltip,
	Typography,
} from '@material-tailwind/react';

import React from 'react';
import { addToCart } from '../../features/cartSlice/cartSlice';
import { useDispatch } from 'react-redux';

const ProductSectionItem = ({ product }) => {
	console.log(
		'🚀 ~ file: ProductSectionItem.jsx:16 ~ ProductSectionItem ~ product:',
		product
	);
	const dispatch = useDispatch();
	const defaultSize = product?.size[0];
	const defaultColor = product?.color[0];
	return (
		<div>
			<Card className="w-full">
				<CardHeader floated={false} className="h-80">
					<img src={product.img} alt={product.name} />
				</CardHeader>
				<CardBody className="text-center">
					<Typography variant="h4" color="blue-gray" className="mb-2">
						{product.name}
					</Typography>
					<Typography color="gray" className="font-medium" textGradient>
						{product.text}
					</Typography>
					<div className="flex justify-between items-center pt-4">
						<Typography color="gray" className="font-medium" textGradient>
							Size lef: {defaultSize}
						</Typography>
						<Typography color="gray" className="font-medium" textGradient>
							Color:{' '}
							<span
								style={{ backgroundColor: defaultColor }}
								className="px-2 rounded-full"
							></span>
						</Typography>
					</div>
				</CardBody>
				<CardFooter className="flex justify-center gap-7 pt-2">
					<Tooltip content="Add to cart" placement="bottom">
						<Button
							size={'lg'}
							color="gray"
							variant="outlined"
							ripple={true}
							onClick={() =>
								dispatch(
									addToCart({
										id: product.id,
										amount: 1,
										img: product.img,
										text: product.text,
										size: defaultSize,
										color: defaultColor,
										price: product.price,
										totalPrice: product.totalPrice,
									})
								)
							}
						>
							Add to cart
						</Button>
					</Tooltip>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ProductSectionItem;
