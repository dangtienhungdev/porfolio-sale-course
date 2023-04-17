import mongooPaginate from 'mongoose-paginate-v2';
import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema(
	{
		orderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Order',
			required: true,
		},
		deliveryAddress: {
			type: String,
			required: true,
		},
		deliveryPhone: {
			type: String,
			required: true,
		},
		deliveryName: {
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
	},
	{ timestamps: true, versionKey: false }
);

deliverySchema.plugin(mongooPaginate);

const Delivery = mongoose.model('Delivery', deliverySchema);
export default Delivery;
