import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000',
});

export const getAll = () => {
	return instance.get(`/projects`);
};

export const getOne = (id) => {
	return instance.get(`/projects/${id}`);
};

export const add = (newProject) => {
	return instance.post(`/projects/${newProject}`);
};

export const update = (item) => {
	return instance.put(`/projects/${item.id}`, item);
};

export const deleteOne = (id) => {
	return instance.delete(`/projects/${id}`);
};
