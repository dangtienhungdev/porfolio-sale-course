import yup from 'yup';

export const foodSchema = yup.object().shape({
	name: yup.string().required().min(3),
	priceOriginal: yup
		.number()
		.required()
		.min(1)
		.positive()
		.test(
			'price-check',
			'Price must be greater than or equal to the original price',
			function (value) {
				const price = this.parent.price;
				return !price || value >= price;
			}
		),
	price: yup.number().min(1).positive(),
	images: yup.array().required().min(1),
	description: yup.string().min(3),
	categoryId: yup.string().required(),
	orderDetails: yup.array(),
	reviews: yup.array(),
	hearts: yup.number().default(0),
	topRated: yup.number().default(0).min(0).max(5),
});
