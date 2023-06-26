import express from 'express';
import { userController } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOne);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

export default router;
