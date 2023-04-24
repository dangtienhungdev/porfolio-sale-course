import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const instance = axios.create({
	baseURL: 'http://localhost:8080/api/v1',
});

/* refresh token */
const refreshToken = async () => {
	try {
		const res = await axios.post(`http://localhost:8080/api/v1/refresh`, {
			withCredentials: true,
		});
		console.log('🚀 ~ file: intance.ts:14 ~ refreshToken ~ data:', res.data);
		return res.data;
	} catch (error) {
		console.log('🚀 ~ file: intance.ts:17 ~ refreshToken ~ error:', error);
	}
};

/* interceptor */
export const createAxios = (userInfo: any, dispatch: any, stateSuccess: any) => {
	const newInstance = axios.create();
	newInstance.interceptors.request.use(
		async (config) => {
			let date = new Date();
			const decodeToken: any = jwt_decode(userInfo?.accessToken);
			if (decodeToken.exp < date.getTime() / 1000) {
				const data = await refreshToken();
				const refreshUser = {
					...userInfo,
					accessToken: data.accessToken,
				};
				dispatch(stateSuccess(refreshUser));
				config.headers['token'] = `Bearer ${data.accessToken}`;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	return newInstance;
};
