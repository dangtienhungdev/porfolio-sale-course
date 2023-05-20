import axios from 'axios';

const linkApi = 'https://api.multiavatar.com/';

export const setAvatar = async (number) => {
	try {
		const response = await axios.get(`${linkApi}/${number}.png`);
		if (response) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};
