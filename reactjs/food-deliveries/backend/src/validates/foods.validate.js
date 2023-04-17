import yup from 'yup';

export const foodSchema = yup.object().shape({
	name: yup.string().required().min(3),
	price: yup.number().required().min(1).positive(),
	images: yup.array().required().min(1),
	description: yup.string().required().min(3),
	categoryId: yup.string().required(),
	orderDetails: yup.array().required(),
	reviews: yup.array(),
});
