import * as dotenv from 'dotenv';

import authRouters from './routers/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routerUser from './routers/user.js';

/* config */
dotenv.config();
const app = express();

app.use(cors()); // => ngă chặn các request từ các domain khác
app.use(cookieParser()); // => tạo cookie cho client
app.use(express.json()); // => chuyển đổi dữ liệu từ client sang dạng json

/* routers */
app.use('/api/v1/auth', authRouters);
app.use('/api/v1', routerUser);

/* connect */
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => console.error(error));

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
