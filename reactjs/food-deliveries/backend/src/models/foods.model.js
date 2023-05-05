import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const foodSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		priceOriginal: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
		},
		images: [
			{
				type: String,
				required: true,
			},
		],
		hearts: {
			type: Number,
			default: 0,
		},
		topRated: {
			type: Number,
			default: 0,
		},
		description: {
			type: String,
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

foodSchema.plugin(mongoosePaginate);

const Food = mongoose.model('Food', foodSchema);
export default Food;
