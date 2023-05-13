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

/* get one */
export const getOneOrder = async (id: string) => {
	try {
		const response = await instance.get(`/orders/${id}`);
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};

/* get one order user by id */
export const getOneOrderUser = async (id: string) => {
	try {
		const response = await instance.get(`/orders/user/${id}`);
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};

/* get all orders */
export const getAllOrders = async () => {
	try {
		const response = await instance.get('/orders?_page=1&_limit=10');
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};
