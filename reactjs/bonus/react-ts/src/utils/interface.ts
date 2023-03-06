export interface Product {
	name: string;
	brand: string;
	color: string;
}

export interface ProductFeature extends Product {
	quantity?: number;
}

export type FinalProduct = Product & ProductFeature;
