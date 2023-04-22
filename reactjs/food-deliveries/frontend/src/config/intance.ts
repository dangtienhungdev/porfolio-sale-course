import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8080/api/v1',
});

export { instance };

/* interceptor */
export const createAxios = (userInfo: any, dispatch: any, stateSuccess: any) => {};
