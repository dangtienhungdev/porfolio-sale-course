import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		isAvatarImageSet: {
			type: Boolean,
			default: false,
		},
		avatarImage: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
