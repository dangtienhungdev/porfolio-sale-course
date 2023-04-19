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
	status: yup.string().required().oneOf(validStatusValue),
	paymentMethodId: yup.string().required(),
	is_active: yup.boolean().required().default(true),
});
