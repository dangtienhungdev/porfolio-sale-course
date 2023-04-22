import { loginFailured, loginStart, loginSuccess } from '../reducers/authSlice';

import instance from '../../config';

/* login */
export const loginUser = async (userInfo: any, dispatch: any, navigate: any) => {
	dispatch(loginStart());
	try {
		const response = await instance(`/sign-in`, userInfo);
		if (response && response.data) {
			dispatch(loginSuccess(response.data));
			navigate('/');
		}
	} catch (error) {
		dispatch(loginFailured());
	}
};
