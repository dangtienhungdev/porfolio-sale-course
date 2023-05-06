import { ICategories } from './categories.type';

export interface IFood {
	_id: string;
	name: string;
	priceOriginal: number;
	price: number;
	images: string[];
	hearts?: number;
	topRated?: number;
	description: string;
	categoryId: ICategories;
	is_active?: boolean;
	orderDetails: any;
	reviews: any;
	amount: number;
}

export interface IFoodProps {
	docs: IFood[];
}
