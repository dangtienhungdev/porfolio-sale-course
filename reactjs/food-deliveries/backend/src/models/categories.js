import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
		},
		foods: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Food',
			},
		],
	},
	{ timestamps: true, versionKey: false }
);

categorySchema.plugin(mongoosePaginate);

const Category = mongoose.model('Category', categorySchema);
export default Category;
