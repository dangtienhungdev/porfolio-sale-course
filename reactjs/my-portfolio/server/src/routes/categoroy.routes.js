import { categoryController } from '../controllers/category.controller.js';
import express from 'express';

const router = express.Router();

router.get('/categories', categoryController.getAll);
router.post('/categories', categoryController.create);
router.get('/categories/:id', categoryController.getOne);
router.put('/categories/:id', categoryController.update);
router.delete('/categories/:id', categoryController.delete);

export default router;
