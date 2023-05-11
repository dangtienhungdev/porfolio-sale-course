import yup from 'yup';

const validStatusValue = ['pending', 'confirmed', 'delivered', 'canceled'];

export const orderSchema = yup.object().shape({
	userId: yup.string().required(),
	items: yup.array().of(
		yup.object().shape({
			foodId: yup.string().required(),
			quantity: yup.number().required().integer().min(0),
			price: yup.number().required().integer().min(0),
		})
	),
	total: yup.number().required().integer().min(0),
	priceShipping: yup.number().integer().min(0).required(),
	shipping: yup.string(),
	address: yup.string().required(),
	status: yup.string().required().oneOf(validStatusValue),
	paymentMethodId: yup.string(),
	is_active: yup.boolean().required().default(true),
});
