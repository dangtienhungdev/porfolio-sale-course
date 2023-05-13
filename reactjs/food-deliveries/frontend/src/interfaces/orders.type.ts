import { IFoodIdOrder } from './foods.type';
import { IUserInfoOrder } from './users.type';

interface IItemFoods {
	_id: string;
	foodId: string;
	quantity: number;
	price: number;
	current_price: number;
}

export enum OrderStatus {
	PENDING = 'pending',
	CONFIRMED = 'confirmed',
	SHIPPING = 'shipping',
	DELIVERED = 'delivered',
	CANCELED = 'canceled',
}

export interface IOrder {
	_id: string;
	userId: string;
	items: IItemFoods[];
	is_active: boolean;
	status: OrderStatus;
	priceShipping: number;
	address: string;
	total: number;
	paymentMethodId: string;
}

export interface IOrders {
	_id: string;
	userId: IUserInfoOrder;
	items: IFoodIdOrder[];
	is_active: boolean;
	status: OrderStatus;
	priceShipping: number;
	address: string;
	total: number;
	paymentMethodId: string;
	createdAt: string;
}
