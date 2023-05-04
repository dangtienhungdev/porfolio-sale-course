import { IUserLogin, IUserRegister } from '../../interfaces/users.type';
import {
	loginFailured,
	loginStart,
	loginSuccess,
	logoutFailure,
	logoutSuccess,
	registerStart,
	registerSuccess,
} from '../reducers/authSlice';

import { Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import axios from 'axios';
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
			console.log('🚀 ~ file: authAction.tsx:28 ~ response:', response);
			dispatch(loginSuccess(response.data));
			message.success('Đăng nhập thành công!');
			if (response.data.user.role === 'admin') {
				navigate('/admin/dashboard');
				return;
			}
			navigate('/');
		}
	} catch (error) {
		message.error('Đăng nhập thất bại!');
		dispatch(loginFailured());
	}
};

/* register */
export const registerUser = async (
	userInfo: IUserRegister,
	dispatch: Dispatch,
	navigate: NavigateFunction
): Promise<void> => {
	dispatch(registerStart());
	try {
		const { data } = await instance.post(`sign-up`, userInfo);
		if (data) {
			dispatch(registerSuccess(data));
			message.success('Đăng ký thành công!');
			navigate('/');
		}
	} catch (error) {
		message.error('Đăng ký thất bại!');
	}
};

/* logout */
export const logoutUser = async (
	dispatch: Dispatch,
	id: string,
	navigate: NavigateFunction,
	accessToken: string,
	axiosJWT: any
) => {
	try {
		await axios.post(`http://localhost:8080/api/v1/logout`, id, {
			headers: {
				token: `Bearer ${accessToken}`,
			},
		});
		dispatch(logoutSuccess());
		navigate('/');
		message.success('Logout success!');
	} catch (error) {
		dispatch(logoutFailure());
	}
};
