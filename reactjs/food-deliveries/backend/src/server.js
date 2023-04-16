import * as dotenv from 'dotenv';

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
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

/* database */
mongoose
	.connect(`${process.env.MONGODB_URI}`)
	.then(() => console.log('Connected to MongoDB...'))
	.catch(() => console.error('Could not connect to MongoDB...'));

/* server */
export const viteNodeApp = app;
