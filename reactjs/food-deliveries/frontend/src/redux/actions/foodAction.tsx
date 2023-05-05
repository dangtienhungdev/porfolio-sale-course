import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../config';

export const getAllFoods = createAsyncThunk('food/getAllFoods', async () => {
	try {
		const response = await instance.get('/foods');
		return response.data;
	} catch (error) {
		return error;
	}
});
