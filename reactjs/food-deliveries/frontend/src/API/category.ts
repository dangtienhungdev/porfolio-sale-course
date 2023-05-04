import instance from '../config';

/* get All */
export const getAllCategories = async () => {
	try {
		const response = await instance.get('/categories');
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		console.log('🚀 ~ file: category.ts:5 ~ getAllCategories ~ error:', error);
	}
};

/* update */
export const updateCategory = async (id: string, category: string) => {
	try {
		const { data } = await instance.put(`/categories/${id}`, category);
		if (data) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

/* delete */
export const deleteCategory = async (id: string) => {
	try {
		const { data } = await instance.delete(`/categories/${id}`);
		if (data) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

/* create */
export const createCategory = async (category: string) => {
	try {
		const { data } = await instance.post('/categories', category);
		if (data) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

/* search */
export const searchCategory = async (category: string) => {
	try {
		const response = await instance.get(`/categories?q=${category}`);
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};
