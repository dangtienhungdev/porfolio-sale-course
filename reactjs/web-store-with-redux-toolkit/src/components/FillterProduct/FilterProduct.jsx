import {
	Button,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
} from '@material-tailwind/react';
import {
	filterByColors,
	filterBySize,
	filteredGender,
	filteredProducts,
	sortByPrice,
} from '../../features/productSlice/productSlice';
import { useDispatch, useSelector } from 'react-redux';

import Error from '../Error/Error';
import ProductCart from './ProductCart';
import React from 'react';
import { useParams } from 'react-router-dom';

const FilterProduct = () => {
	const { filteredProducts: products } = useSelector((state) => state.products);
	const { error } = useSelector((state) => state.products);
	const { type } = useParams();
	const genderButton = ['male', 'female'];
	const colorButton = ['red', 'blue', 'green', 'yellow', 'black', 'white'];
	const sizeButton = ['S', 'M', 'L', 'XL', 'XXL'];

	const dispatch = useDispatch();
	return (
		<div>
			<div className="p-8">
				<h1 className="text-3xl font-bold text-gray-700">{type}</h1>
				<div className="flex justify-between items-center py-8">
					<div className="flex items-center gap-4">
						{genderButton.map((item) => (
							<div key={item}>
								<Button
									color="gray"
									size="lg"
									variant="outlined"
									ripple={true}
									onClick={() => dispatch(filteredGender(item))}
									className="text-black hover:bg-gray-300 duration-300 ease-in-out"
								>
									{item}
								</Button>
							</div>
						))}
						<Button
							color="gray"
							size="lg"
							variant="outlined"
							ripple={true}
							onClick={() => dispatch(sortByPrice())}
							className="text-black hover:bg-gray-300 duration-300 ease-in-out"
						>
							Hight Price
						</Button>
						<Menu>
							<MenuHandler>
								<Button
									color="gray"
									size="lg"
									variant="outlined"
									ripple={true}
									className="text-black hover:bg-gray-300 duration-300 ease-in-out"
								>
									Choose Color
								</Button>
							</MenuHandler>
							<MenuList>
								{colorButton.map((color) => (
									<MenuItem
										onClick={() => dispatch(filterByColors(color))}
										key={color}
									>
										{color}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
						<Menu>
							<MenuHandler>
								<Button
									disabled={type === 'bags'}
									color="gray"
									size="lg"
									variant="outlined"
									ripple={true}
									className="text-black hover:bg-gray-300 duration-300 ease-in-out"
								>
									Choose Size
								</Button>
							</MenuHandler>
							<MenuList>
								{sizeButton.map((size) => (
									<MenuItem
										onClick={() => dispatch(filterBySize(size))}
										key={size}
									>
										{size}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</div>
					<div className="">
						<Button
							color="gray"
							size="lg"
							variant="outlined"
							ripple={true}
							onClick={() => dispatch(filteredProducts(type))}
							className="text-black hover:bg-gray-300 duration-300 ease-in-out"
						>
							Clear Filter
						</Button>
					</div>
				</div>
			</div>
			{error ? (
				<Error />
			) : (
				<div className="grid lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-10 p-8">
					{products
						.filter((product) => product.type === type)
						.map((product) => {
							return (
								<div key={product.id} className="bg-white rounded-lg shadow-lg">
									<ProductCart product={product} />
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};

export default FilterProduct;
