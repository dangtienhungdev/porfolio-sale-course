import { checkAdmin, userMiddlewares } from '../middlewares/users.middlewares';

import { authController } from '../controllers/auth.controllers';
import express from 'express';
import { userController } from '../controllers/users.controller';

const router = express.Router();

/* đăng ký */
router.post('/sign-up', authController.register);
/* đăng nhập */
router.post('/sign-in', authController.login);
/* đăng xuất */
router.post('/logout', authController.logout);
/* lấy tất cả người dùng */
router.get('/users', userController.getAll);
/* lấy thông tin người dùng */
router.get('/me/:id', userController.getOne);
/* cập nhật thông tin người dùng */
router.put('/me/:id', userController.update);
/* xóa người dùng */
router.delete(
	'/me/:id',
	userMiddlewares.verifyTokenAdmin,
	checkAdmin,
	userController.delete
);

export default router;
