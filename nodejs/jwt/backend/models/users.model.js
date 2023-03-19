import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 20,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 250,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		admin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('User', userSchema);
