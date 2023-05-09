import { Dispatch, createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserFailure, updateUserStart, updateUserSuccess } from '../reducers/userSlice';

import instance from '../../config';

/* update user */
export const updateUser = async (userInfo: any, dispatch: Dispatch) => {
	dispatch(updateUserStart());
	try {
		const response = await instance.put(`/me/${userInfo._id}`, userInfo);
		if (response) {
			dispatch(updateUserSuccess(response.data));
		}
	} catch (error) {
		dispatch(updateUserFailure());
	}
};

/* get One */
export const getOneUser = async (id: string) => {
	try {
		const response = await instance.get(`/me/${id}`);
		if (response) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};

/* extraReducers */
export const getUserById = createAsyncThunk('user/getUserById', async (id: string) => {
	try {
		const response = await instance.get(`/me/${id}`);
		if (response) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
});
