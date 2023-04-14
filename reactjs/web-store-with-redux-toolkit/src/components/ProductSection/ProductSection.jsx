import ProductSectionItem from './ProductSectionItem';
import React from 'react';
import { storeData } from '../../assets/data/dummyData';

const ProductSection = () => {
	return (
		<div>
			<div className="p-2 w-1/2 mx-auto bg-black rounded-md mt-5">
				<h1 className="text-3xl text-red-500 text-center font-bold">
					Summer T-shirt sale 30%
				</h1>
			</div>
			<div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
				{storeData.slice(0, 6).map((product, index) => {
					return (
						<div key={index}>
							<ProductSectionItem product={product} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductSection;
