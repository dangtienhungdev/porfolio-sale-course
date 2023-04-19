import * as dotenv from 'dotenv';

import categoryRoutes from './routes/categories.routes';
import cors from 'cors';
import express from 'express';
import foodRoutes from './routes/foods.routes';
import mongoose from 'mongoose';
import morgan from 'morgan';
import orderRoutes from './routes/orders.routes';
import paymentRoutes from './routes/payments.routes';
import reviewRoutes from './routes/reviews.routes';
import userRotes from './routes/users.routes';

/* confign */
const app = express();
dotenv.config();

/* middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: true }));

/* routes */
app.use('/api/v1', userRotes);
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', foodRoutes);
app.use('/api/v1', reviewRoutes);
app.use('/api/v1', paymentRoutes);
app.use('/api/v1', orderRoutes);

/* database */
mongoose
	.connect(`${process.env.MONGODB_URI}`)
	.then(() => console.log('Connected to MongoDB...'))
	.catch(() => console.error('Could not connect to MongoDB...'));

/* server */
export const viteNodeApp = app;
