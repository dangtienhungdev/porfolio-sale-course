import authRoutes from './auth.routes.js';
import categoryRoutes from './categoroy.routes.js';
import express from 'express';
import userRoutes from './user.routes.js';

const router = express.Router();

const rootRoutes = [authRoutes, userRoutes, categoryRoutes];

rootRoutes.forEach((route) => {
  router.use(route);
});

export default router;
