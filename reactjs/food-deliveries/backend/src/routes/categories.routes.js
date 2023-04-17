import { categoryController } from '../controllers/categories.controller';
import express from 'express';

const router = express.Router();

router.post('/categories', categoryController.create);
router.get('/categories', categoryController.getAll);
router.get('/categories/:id', categoryController.getOne);
router.put('/categories/:id', categoryController.update);
router.delete('/categories/:id', categoryController.delete);

export default router;
