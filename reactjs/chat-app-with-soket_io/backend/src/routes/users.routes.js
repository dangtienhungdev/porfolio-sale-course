import {
	login,
	register,
	updateUser,
} from '../controllers/users.controller.js';

import express from 'express';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/user/:id', updateUser);

export default router;
