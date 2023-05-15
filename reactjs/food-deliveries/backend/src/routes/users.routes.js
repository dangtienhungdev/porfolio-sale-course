import { checkAdmin, userMiddlewares } from '../middlewares/users.middlewares';

import { authController } from '../controllers/auth.controllers';
import express from 'express';
import { userController } from '../controllers/users.controller';

const router = express.Router();

/* đăng ký */
router.post('/sign-up', authController.register);
/* tạo người dùng mới từ admin */
router.post('/users/create', userController.create);
/* đăng nhập */
router.post('/sign-in', authController.login);
/* refresh token */
router.post('/refresh', authController.requestRefreshToken);
/* đăng xuất */
router.post('/logout', authController.logout);
/* lấy tất cả người dùng */
router.get('/users', userController.getAll);
/* lấy thông tin người dùng */
router.get('/me/:id', userController.getOne);
/* cập nhật thông tin người dùng */
router.put('/me/:id', userMiddlewares.verifyTokenAdmin, userController.update);
/* xóa người dùng */
router.delete(
	'/me/:id',
	userMiddlewares.verifyTokenAdmin,
	checkAdmin,
	userController.delete
);

export default router;
