import express from 'express';
import middlewareControllers from '../middlewares/user.middleware.js';
import { userControllers } from '../controllers/user.controllers.js';

const router = express.Router();

router.get(
	'/users',
	middlewareControllers.verifyToken,
	userControllers.getAllUsers
);
router.delete(
	'/users/:id',
	middlewareControllers.verifyTokenAndAdminAuth,
	userControllers.deleteUser
);

export default router;
