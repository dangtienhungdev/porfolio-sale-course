import { loginFailured, loginStart, loginSuccess } from '../reducers/authSlice';

import { Dispatch } from '@reduxjs/toolkit';
import { IUserLogin } from '../../interfaces/users.type';
import { NavigateFunction } from 'react-router-dom';
import instance from '../../config';
import { message } from 'antd';

/* login */
export const loginUser = async (
	userInfo: IUserLogin,
	dispatch: Dispatch,
	navigate: NavigateFunction
): Promise<void> => {
	dispatch(loginStart());
	try {
		const response = await instance.post(`/sign-in`, userInfo);
		if (response && response.data) {
			dispatch(loginSuccess(response.data));
			message.success('Đăng nhập thành công!');
			navigate('/');
		}
	} catch (error) {
		message.error('Đăng nhập thất bại!');
		dispatch(loginFailured());
	}
};
