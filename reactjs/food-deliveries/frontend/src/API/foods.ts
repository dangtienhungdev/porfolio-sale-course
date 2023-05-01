import { IFood } from '../interfaces/foods.type';
import instance from '../config';

/* get all */
export const getAllFoods = async () => {
	try {
		const { data } = await instance.get(`/foods`);
		if (data) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

/* create food */
export const createFood = async (food: IFood) => {
	try {
		const response = await instance.post(`/foods`, food);
		if (response && response.data) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};

/* update */
export const updateFood = async (food: IFood) => {
	try {
		const response = await instance.put(`/foods/${food._id}`, food);
		if (response && response.data) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};
