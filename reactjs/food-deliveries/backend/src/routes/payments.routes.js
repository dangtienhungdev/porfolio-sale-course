import { checkAdmin, userMiddlewares } from '../middlewares/users.middlewares';

import express from 'express';
import { paymentController } from '../controllers/payments.controller';

const router = express.Router();

router.post(
	'/payments',
	userMiddlewares.verifyTokenAdmin,
	checkAdmin,
	paymentController.create
);
router.get(
	'/payments',
	userMiddlewares.verifyTokenAdmin,
	checkAdmin,
	paymentController.getAll
);
router.get(
	'/payments/:id',
	userMiddlewares.verifyTokenAdmin,
	checkAdmin,
	paymentController.getOne
);
router.put(
	'/payments/:id',
	userMiddlewares.verifyTokenAdmin,
	checkAdmin,
	paymentController.update
);
router.delete(
	'/payments/:id',
	userMiddlewares.verifyTokenAdmin,
	checkAdmin,
	paymentController.delete
);

export default router;
