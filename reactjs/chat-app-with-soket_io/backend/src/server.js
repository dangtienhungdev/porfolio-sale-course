import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

/* config */
morgan('tiny');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

/* database */
mongoose
	.connect(`${process.env.MONGO_URL}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(() => console.log('Failed to connect to MongoDB'));

/* connect */
app.listen(process.env.PORT, () => {
	console.log(`Server is running on port: ${process.env.PORT}`);
});
