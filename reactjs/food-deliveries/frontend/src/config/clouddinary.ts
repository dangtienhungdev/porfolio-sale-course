import axios from 'axios';

export const CLOUD_NAME = 'dcwdrvxdg';
export const UPLOAD_PRESET = 'FoodDelivery';
export const FOLDER_NAME = 'food_delivery';

export const uploadImage = async (formData: FormData) => {
	try {
		const { data } = await axios.post(
			`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
			formData
		);
		if (data) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};
