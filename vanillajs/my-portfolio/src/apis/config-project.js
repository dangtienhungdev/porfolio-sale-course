import { instance } from './config';

export const getAll = () => {
	return instance.get(`/projects`);
};

export const getOne = (id) => {
	return instance.get(`/projects/${id}`);
};

export const add = (newProject) => {
	return instance.post(`/projects`, newProject);
};

export const update = (item) => {
	return instance.put(`/projects/${item.id}`, item);
};

export const deleteOne = (id) => {
	return instance.delete(`/projects/${id}`);
};
