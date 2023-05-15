import { IUserInfoManager } from '../interfaces/users.type';
import instance from '../config';

/* get all */
export const getAllUser = async () => {
	try {
		const { data } = await instance.get(`/users`);
		if (data) {
			return data;
		}
	} catch (error) {
		return error;
	}
};

/* search */
export const searchUser = async (search: string) => {
	try {
		const { data } = await instance.get(`/users?q=${search}`);
		if (data) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

/* create User */
export const createUser = async (user: IUserInfoManager) => {
	try {
		const response = await instance.post(`/users/create`, user);
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		return error;
	}
};

/* delete User */
export const deleteUser = async (accessToken: string, id: string) => {
	try {
		const response = await instance.delete(`/me/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		return error;
	}
};

/* update User */
export const updateUser = async (accessToken: string, userInfo: IUserInfoManager) => {
	try {
		const response = await instance.put(`/me/${userInfo._id}`, userInfo, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (response && response.data) {
			return response;
		}
	} catch (error) {
		return error;
	}
};
