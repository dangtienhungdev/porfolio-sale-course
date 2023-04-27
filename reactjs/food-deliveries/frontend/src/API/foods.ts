import instance from '../config';

/* get all */
export const getALlFoods = async () => {
	try {
		const { data } = await instance.get(`/foods`);
		if (data) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};
