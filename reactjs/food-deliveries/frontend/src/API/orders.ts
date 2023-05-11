import { IOrder } from '../interfaces/orders.type';
import instance from '../config';

/* create order */
export const createOrder = async (order: IOrder) => {
	try {
		const response = await instance.post(`/orders`, order);
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};
