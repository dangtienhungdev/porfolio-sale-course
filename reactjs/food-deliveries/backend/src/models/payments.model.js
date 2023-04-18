import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const paymentSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
			unique: true,
		},
		cardNumber: {
			type: String,
			required: true,
		},
		cardName: {
			type: String,
			required: true,
		},
		cardExpiry: {
			type: String,
			required: true,
		},
		is_active: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

paymentSchema.plugin(mongoosePaginate);

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
