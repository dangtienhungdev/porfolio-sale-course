import instance from '../config';

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
