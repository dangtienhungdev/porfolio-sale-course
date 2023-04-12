import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from '@material-tailwind/react';

import React from 'react';

const ProductCart = ({ product }) => {
	console.log(product.color);
	return (
		<Card className="w-full">
			<CardHeader color="blue" className="relative h-56">
				<img
					src={product.img}
					alt={product.name}
					className="h-full w-full object-cover"
				/>
			</CardHeader>
			<CardBody className="text-center">
				<Typography variant="h5" className="mb-2">
					{product.name}
				</Typography>
				<Typography>{product.text}</Typography>
			</CardBody>
			<CardFooter divider className="flex items-center justify-between py-3">
				<Typography variant="small">{product.price}$</Typography>
				<div className="flex gap-2 items-center justify-center">
					{product.colors?.map((color) => {
						return (
							<div
								className="h-4 w-4 rounded-full"
								key={color}
								style={{ backgroundColor: color }}
							></div>
						);
					})}
				</div>
			</CardFooter>
		</Card>
	);
};

export default ProductCart;
