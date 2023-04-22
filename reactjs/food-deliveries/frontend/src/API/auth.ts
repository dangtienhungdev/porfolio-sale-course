import instance from '../config';

/* login */
export const getAllUser = async () => {
	try {
		const { data } = await instance.get(`/users`);
		if (data) {
			return data;
		}
	} catch (error) {
		return error;
	}
};
