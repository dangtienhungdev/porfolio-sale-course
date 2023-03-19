import { authControllers } from '../controllers/auth.controllers.js';
import express from 'express';
import middlewareControllers from '../middlewares/user.middleware.js';

const router = express.Router();

router.post('/register', authControllers.register);
router.post('/login', authControllers.loginUser);

/* refresh token */
router.post('/refresh', authControllers.requestRefreshToken);

/* logout */
router.post(
	'/logout',
	middlewareControllers.verifyToken /* phải đăng nhập rồi thì mới đăng xuất được */,
	authControllers.logoutUser
);

export default router;
