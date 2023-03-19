import express from 'express';
import { userControllers } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/users', userControllers.getAllUsers);
router.delete('/users/:id', userControllers.deleteUser);

export default router;
