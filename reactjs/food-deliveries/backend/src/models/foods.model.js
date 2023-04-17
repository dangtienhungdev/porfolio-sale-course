import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		images: [
			{
				type: String,
				required: true,
			},
		],
		description: {
			type: String,
			required: true,
		},
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
		},
		orderDetails: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'OrderDetail',
			},
		],
		reviews: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Review',
			},
		],
		is_active: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

const Food = mongoose.model('Food', foodSchema);
export default Food;
