import { updateUserFailure, updateUserStart, updateUserSuccess } from '../reducers/userSlice';

import { Dispatch } from '@reduxjs/toolkit';
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
