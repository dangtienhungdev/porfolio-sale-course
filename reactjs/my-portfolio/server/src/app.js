import { connectDB } from './configs/database.config.js';
import express from 'express';
import rootRoutes from './routes/index.js';

/* config */
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

/* connect db */
connectDB();

/* routes */
app.use('/api/v1', rootRoutes);

app.use('/', (req, res) => {
  res.send('Hello World!');
});

/* connect db */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
