import mongoose from 'mongoose';

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
			default: false,
		},
	},
	{ timestamps: true, versionKey: false }
);

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
