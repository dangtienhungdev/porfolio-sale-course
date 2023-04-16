import yup from 'yup';

export const userRegister = yup.object().shape({
	name: yup.string().required().min(3).max(200).trim(),
	email: yup.string().required().email().trim(),
	password: yup.string().required().min(6).max(200).trim(),
	confirmPassword: yup
		.string()
		.required()
		.oneOf([yup.ref('password')]),
	address: yup.string().trim(),
	phone: yup.string().trim(),
});

export const userLogin = yup.object().shape({
	email: yup.string().required().email().trim(),
	password: yup.string().required().min(6).max(200).trim(),
});
