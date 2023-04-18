import mongooPaginate from 'mongoose-paginate-v2';
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	foodId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Food',
		required: true,
	},
	rating: {
		type: Number,
		default: 0,
	},
	comment: {
		type: String,
		required: true,
	},
	is_active: {
		type: Boolean,
		default: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

reviewSchema.plugin(mongooPaginate);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
