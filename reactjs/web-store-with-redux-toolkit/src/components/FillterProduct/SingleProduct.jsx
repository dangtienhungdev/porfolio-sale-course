import { Button, Tooltip } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { addToCart } from '../../features/cartSlice/cartSlice';

const SingleProduct = () => {
	const dispatch = useDispatch();
	/* redux */
	const product = useSelector((state) => state.products.singalProduct);

	/* useState */
	const productSize = product?.size ? product?.size[0] : '';
	const productColor = product.color ? product.color[0] : '';
	const [size, setSize] = React.useState(productSize);
	const [color, setColor] = React.useState(productColor);
	return (
		<div className="p-4">
			<div
				key={product.id}
				className="flex justify-center items-center py-10 gap-x-10"
			>
				<div className="">
					<img
						src={product.img}
						alt={product.name}
						className="h-[850px] rounded-lg"
					/>
				</div>
				<div className="">
					<div className="max-w-lg">
						<h1 className="text-3xl font-bold">{product.name}</h1>
						<p className="text-orange-700 text-xl font-inter font-bold tracking-normal pb-4">
							15% OFF
						</p>
						<p className="text-gray-500 text-lg font-inter font-normal tracking-normal pb-4">
							{product.text}
						</p>
						<div className="pb-4">
							{product.size && product.size.length > 0 ? (
								<div className="">
									<label
										htmlFor="size"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Pick all size
									</label>
									<select
										name="size"
										id="size"
										value={size}
										onChange={(e) => setSize(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										{product.size?.map((size) => (
											<option value={size} key={size}>
												{size}
											</option>
										))}
									</select>
								</div>
							) : (
								<div className="">
									<label
										htmlFor="size"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Pick all size
									</label>
									<select
										disabled={true}
										name="size"
										id="size"
										value={size}
										onChange={(e) => setSize(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										{product.size?.map((size) => (
											<option value={size} key={size}>
												{size}
											</option>
										))}
									</select>
								</div>
							)}
						</div>
						<div className="pb-4">
							<div className="">
								<label
									htmlFor="color"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Pick all color
								</label>
								<select
									name="color"
									id="color"
									value={color}
									onChange={(e) => setColor(e.target.value)}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									{product.color?.map((size) => (
										<option value={size} key={size}>
											{size}
										</option>
									))}
								</select>
							</div>
						</div>
						<Tooltip content="Add to cart" placement="bottom">
							<Button
								color="gray"
								size="lg"
								variant="outlined"
								onClick={() =>
									dispatch(
										addToCart({
											id: product.id,
											name: product.name,
											size: size,
											color: color,
											price: product.price,
											amount: 1,
											totalPrice: product.price,
										})
									)
								}
							>
								All to cart
							</Button>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
