import { checkAdmin, userMiddlewares } from '../middlewares/users.middlewares';

import { authController } from '../controllers/auth.controllers';
import express from 'express';
import { userController } from '../controllers/users.controller';

const router = express.Router();

/* đăng ký */
/**
 * @openapi
 * /sign-up:
 * get:
 * 		summary: Đăng ký tài khoản
 * 		description: Đăng ký tài khoản
 * 		parameters:
 * 			- in: body
 * 				name: body
 * 				description: Thông tin tài khoản
 * 				required: true
 * 				schema:
 * 					type: object
 * 					required:
 * 						- name
 * 						- email
 * 						- password
 * 						- confirmPassword
 * 					properties:
 * 						name:
 * 							type: string
 * 						email:
 * 							type: string
 * 						password:
 * 							type: string
 * 						confirmPassword:
 * 							type: string
 * 		responses:
 * 			200:
 * 				description: User created
 * 			500:
 * 				description: Register not found
 */
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
/* xóa mềm người dùng */
router.put('/me/:id/recoverable-delete', userController.recoverableDeletion);
/* khôi phục người dùng */
router.put('/me/:id/undo-delete', userController.undeDeleteUser);
/* lấy tất cả người dùng đã xóa */
router.get('/users/deleted', userController.getAllUserDeleted);
/* xóa 30s */
router.delete('/users/:id', userController.deleteUserCannotRecover);
export default router;
