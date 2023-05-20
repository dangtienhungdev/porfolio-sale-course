import { instance } from './instances';

/* register */
export const registerAuth = (data) => {
	return instance.post('/auth/register', data);
};

/* login */
export const loginAuth = (data) => {
	return instance.post('/auth/login', data);
};
