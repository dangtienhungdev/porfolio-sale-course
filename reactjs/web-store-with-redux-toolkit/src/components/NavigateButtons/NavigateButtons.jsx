import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import React from 'react';
import clothes from '../../assets/images/clothes.jpg';
import { filteredProducts } from '../../features/productSlice/productSlice';
import { useDispatch } from 'react-redux';

const NavigateButtons = () => {
	const buttons = [
		'Hoodies',
		'Dresses',
		'Suits',
		'Shoes',
		'T-Shirts',
		'Jeans',
		'Jackets',
		'Bags',
	];
	const dispatch = useDispatch();
	return (
		<div>
			<div className="flex gap-x-4 items-center justify-center py-8">
				{buttons.map((button) => {
					return (
						<div key={button}>
							<Link to={`/filtered-products/${button}`}>
								<Button
									color="gray"
									variant="outlined"
									size="lg"
									ripple={true}
									className="hover:bg-green-300 duration-300 ease-in-out"
									onClick={() => dispatch(filteredProducts(button))}
								>
									{button}
								</Button>
							</Link>
						</div>
					);
				})}
			</div>
			<div className="bg-gray-300 p-2 w-[55%] mx-auto rounded-lg mb-8">
				<h3 className="text-orange-500 uppercase font-medium text-center">
					Sales up to 50%
				</h3>
			</div>
			<div className="flex justify-center items-center w-full">
				<img
					src={clothes}
					alt="clothes"
					className="w-[70%] mx-auto h-[600px] rounded object-cover"
				/>
			</div>
		</div>
	);
};

export default NavigateButtons;
