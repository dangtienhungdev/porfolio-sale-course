import * as dotenv from 'dotenv';

import mongoose from 'mongoose';

dotenv.config();

export const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGOOSE_URL)
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch(() => {
        console.log('MongoDB connection failed');
      });
  } catch (error) {
    console.log(error);
  }
};
