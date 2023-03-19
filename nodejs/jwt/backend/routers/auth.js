import { authControllers } from '../controllers/auth.controllers.js';
import express from 'express';

const router = express.Router();

router.post('/register', authControllers.register);
router.post('/login', authControllers.loginUser);

/* refresh token */
router.post('/refresh', authControllers.requestRefreshToken);

export default router;
