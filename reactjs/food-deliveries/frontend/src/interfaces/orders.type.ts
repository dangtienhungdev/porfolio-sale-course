interface IItemFoods {
	_id: string;
	foodId: string;
	quantity: number;
	price: number;
	current_price: number;
}

enum OrderStatus {
	PENDING = 'pending',
	CONFIRMED = 'confirmed',
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
