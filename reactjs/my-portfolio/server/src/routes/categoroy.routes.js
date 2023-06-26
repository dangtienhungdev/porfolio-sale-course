import { categoryController } from '../controllers/category.controller.js';
import express from 'express';

const router = express.Router();

router.get('/categoris', categoryController.getAll);

export default router;
