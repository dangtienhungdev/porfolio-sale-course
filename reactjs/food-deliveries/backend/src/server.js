import * as dotenv from 'dotenv';

import categoryRoutes from './routes/categories.routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import foodRoutes from './routes/foods.routes';
import mongoose from 'mongoose';
import morgan from 'morgan';
import orderRoutes from './routes/orders.routes';
import paymentRoutes from './routes/payments.routes';
import reviewRoutes from './routes/reviews.routes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import userRotes from './routes/users.routes';

/* confign */
const app = express();
dotenv.config();
app.use(cookieParser()); // => tạo cookie cho client

/* middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: true }));

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Food Delivery API',
			version: '1.0.0',
		},
		servers: [
			{
				url: 'http://localhost:8080/api/v1',
			},
		],
	},
	apis: ['./routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
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
