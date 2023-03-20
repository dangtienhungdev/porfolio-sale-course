import axios from 'axios';
import jwt_decode from 'jwt-decode';

const refreshToken = async () => {
	try {
		const res = await axios.post('/api/v1/auth/refresh', {
			withCredentials: true,
		});
		console.log('🚀 ~ file: HomePage.jsx:45 ~ refreshToken ~ res:', res);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const createAxios = (userInfo, dispatch, stateSuccess) => {
	const newInstance = axios.create();
	newInstance.interceptors.request.use(
		async (config) => {
			let date = new Date();
			const decodeToken = jwt_decode(userInfo?.accessToken); // giải mã token
			if (decodeToken.exp < date.getTime() / 1000) {
				const data = await refreshToken(); // lấy ra 1 cái token mới
				const refreshUser = {
					...userInfo,
					accessToken: data.accessToken,
				};
				dispatch(stateSuccess(refreshUser));
				config.headers['token'] = 'Bearer ' + data.accessToken;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	return newInstance;
};
