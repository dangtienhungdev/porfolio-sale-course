import yup from 'yup';

export const reviewValidate = yup.object().shape({
	userId: yup.string().required(),
	foodId: yup.string().required(),
	rating: yup.number().default(0).min(0).max(5),
	comment: yup.string().required(),
	is_active: yup.boolean().default(true),
});
