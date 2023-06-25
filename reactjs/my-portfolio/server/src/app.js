import { connectDB } from './configs/database.config.js';
import express from 'express';

/* config */
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

/* connect db */
connectDB();

/* routes */

/* connect db */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
