import { instance } from './instances';

/* register */
export const register = (data) => {
	return instance.post('/auth/register', data);
};
