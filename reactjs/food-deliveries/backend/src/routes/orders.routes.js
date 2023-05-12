import express from 'express';
import { orderController } from '../controllers/orders.controller';

const router = express.Router();

router.post('/orders', orderController.create);
router.get('/orders', orderController.getAll);
router.get('/orders/:id', orderController.getOne);
router.get('/orders/user/:id', orderController.getOrderByUserId);

export default router;
