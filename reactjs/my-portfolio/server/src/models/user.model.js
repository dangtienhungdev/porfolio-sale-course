import mongoose from 'mongoose';
import mongoosePagination from 'mongoose-paginate-v2';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    socials: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Social',
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

userSchema.plugin(mongoosePagination);

const User = mongoose.model('User', userSchema);

export default User;
