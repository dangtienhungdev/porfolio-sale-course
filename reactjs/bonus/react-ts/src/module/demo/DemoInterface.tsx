import { Product, ProductFeature } from '../../utils/interface';

const product: Product = {
	name: 'dang tien hung',
	brand: 'hung',
	color: 'red',
};

const addProduct = (product: ProductFeature): void => {
	console.log('🚀 ~ file: interface.ts:14 ~ product:', product);
	product.quantity = 200;
};
addProduct(product);
