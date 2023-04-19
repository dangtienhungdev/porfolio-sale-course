import yup from 'yup';

export const orderDetailsSchema = yup.object().shape({
	foodId: yup.string().required(),
	orderId: yup.string().required(),
	quantity: yup.number().required().integer().min(0),
	price: yup.number().required().integer().min(0),
	current_price: yup.number().required().integer().min(0),
	is_active: yup.boolean().required().default(true),
	createdAt: yup.date().required().default(Date.now()),
	updatedAt: yup.date().required().default(Date.now()),
});
