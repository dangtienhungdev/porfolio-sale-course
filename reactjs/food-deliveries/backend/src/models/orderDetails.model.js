import mongooPaginate from 'mongoose-paginate-v2';
import mongoose from 'mongoose';

const orderDetailSchema = new mongoose.Schema(
	{
		foodId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Food',
			required: true,
		},
		orderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Order',
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		current_price: {
			type: Number,
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

orderDetailSchema.plugin(mongooPaginate);

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);
export default OrderDetail;
