import authRoutes from './auth.routes.js';
import express from 'express';
import userRoutes from './user.routes.js';

const router = express.Router();

const rootRoutes = [authRoutes, userRoutes];

rootRoutes.forEach((route) => {
  router.use(route);
});

export default router;
