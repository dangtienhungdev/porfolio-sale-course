import {
	checkToken,
	login,
	register,
} from '../controllers/users.controller.js';

import express from 'express';

const router = express.Router();

router.post('/register', checkToken, register);
router.post('/login', checkToken, login);

export default router;
