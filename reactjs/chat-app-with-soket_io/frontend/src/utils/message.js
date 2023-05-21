import { instance } from './instances';

export const createMessage = async (message) => {
	try {
		const response = await instance.post('/add-message', message);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getAllMessages = async (data) => {
	try {
		const response = await instance.post('/messages', data);
		return response;
	} catch (error) {
		console.log(error);
	}
};
