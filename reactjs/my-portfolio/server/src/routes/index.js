import authRoutes from './auth.routes.js';
import categoryRoutes from './categoroy.routes.js';
import express from 'express';
import socialRoutes from './social.routes.js';
import uploadRoutes from './upload.routes.js';
import userRoutes from './user.routes.js';

const router = express.Router();

const rootRoutes = [authRoutes, userRoutes, categoryRoutes, socialRoutes, uploadRoutes];

rootRoutes.forEach((route) => {
  router.use(route);
});

export default router;
