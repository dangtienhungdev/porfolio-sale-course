import { IPayment } from '../interfaces/payments.type';
import instance from '../config';

/* create payment */
export const createPayment = async (authtoken: string, payment: IPayment) => {
	try {
		const response = await instance.post(`/payments`, payment, {
			headers: {
				Authorization: `Bearer ${authtoken}`,
			},
		});
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};

/* get one payment */
export const getOnePayment = async (accessToken: string, id: string) => {
	try {
		const response = await instance.get(`/payments/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};
