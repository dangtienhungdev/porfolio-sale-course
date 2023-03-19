import {
	loginFailure,
	loginStart,
	loginSuccess,
	registerError,
	registerStart,
	registerSuccess,
} from './authSlice';

import axios from 'axios';

/**
=> xử lí tất cả các api call ở đây & truyền thông tin vào redux của mình
 */

/* login */
export const loginUser = async (user, dispatch, navigate) => {
	dispatch(loginStart());
	try {
		const res = await axios.post('/api/v1/auth/login', user);
		dispatch(loginSuccess(res.data));
		navigate('/');
	} catch (error) {
		dispatch(loginFailure());
	}
};

/* register */
export const registerUser = async (user, dispatch, navigate) => {
	dispatch(registerStart());
	try {
		await axios.post('/api/v1/auth/register', user);
		dispatch(registerSuccess());
		navigate('/login');
	} catch (error) {
		dispatch(registerError());
	}
};
