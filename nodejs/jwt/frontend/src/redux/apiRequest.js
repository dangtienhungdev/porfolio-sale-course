import { loginFailure, loginStart, loginSuccess } from './authSlice';

import axios from 'axios';

/**
=> xử lí tất cả các api call ở đây & truyền thông tin vào redux của mình
 */
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
