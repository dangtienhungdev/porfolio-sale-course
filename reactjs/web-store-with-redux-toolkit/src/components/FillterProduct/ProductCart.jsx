import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from '@material-tailwind/react';
import { Link, useParams } from 'react-router-dom';

import React from 'react';
import { singalProduct } from '../../features/productSlice/productSlice';
import { useDispatch } from 'react-redux';

const ProductCart = ({ product }) => {
	const { type } = useParams();
	const dispatch = useDispatch();
	return (
		<Link to={`/filtered-products/${type}/${product.id}`}>
			<Card
				className="w-full"
				onClick={() => dispatch(singalProduct(product.id))}
			>
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
						{product.color?.map((color) => {
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
		</Link>
	);
};

export default ProductCart;
