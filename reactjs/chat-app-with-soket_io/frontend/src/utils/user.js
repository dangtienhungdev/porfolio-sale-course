import { instance } from './instances';

export const updateUser = (userInfo) => {
	return instance.put(`/auth/user/${userInfo._id}`, userInfo);
};
