import authRoutes from './auth.routes.js';
import express from 'express';

const router = express.Router();

const rootRoutes = [authRoutes];

rootRoutes.forEach((route) => {
  router.use(route);
});

export default router;
