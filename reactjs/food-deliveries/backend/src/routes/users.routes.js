import { authController } from '../controllers/auth.controllers';
import express from 'express';

const router = express.Router();

/* đăng ký */
router.post('/sign-up', authController.register);
/* đăng nhập */
router.post('/sign-in', authController.login);
/* đăng xuất */
router.post('/logout', authController.logout);

export default router;
