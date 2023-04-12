import ProductCart from './ProductCart';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FilterProduct = () => {
	const { filteredProducts: products } = useSelector((state) => state.products);
	const { type } = useParams();
	return (
		<div>
			<div className="p-8">
				<h1 className="text-3xl font-bold text-gray-700">{type}</h1>
			</div>
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
		</div>
	);
};

export default FilterProduct;
