import yup from 'yup';

export const paymentValidate = yup.object().shape({
	userId: yup.string().required(),
	cardNumber: yup.string().required(),
	cardName: yup.string().required(),
	cardExpiry: yup.string().required(),
	is_active: yup.boolean().default(true),
});
