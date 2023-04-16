import * as dotenv from 'dotenv';

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

/* confign */
const app = express();

/* middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

/* routes */

/* database */
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('Database connected'))
	.catch(() => console.log('Database connection error'));

/* server */
export const viteNodeApp = app;
