import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
	{
		message: {
			text: {
				type: String,
				required: true,
			},
		},
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		users: Array,
	},
	{ timestamps: true, versionKey: false }
);

const Message = mongoose.model('Message', messageSchema);
export default Message;
