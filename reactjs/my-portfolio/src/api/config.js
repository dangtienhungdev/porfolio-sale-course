const { default: axios } = require('axios');

export const instance = axios.create({
	baseURL: 'http://localhost:3000',
});
