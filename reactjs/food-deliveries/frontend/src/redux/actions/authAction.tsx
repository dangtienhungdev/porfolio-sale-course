import { IUserLogin, IUserRegister } from '../../interfaces/users.type';
import {
	loginFailured,
	loginStart,
	loginSuccess,
	registerStart,
	registerSuccess,
} from '../reducers/authSlice';

import { Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import instance from '../../config';
import { message } from 'antd';
import { useAppDispatch } from '../hooks';

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
