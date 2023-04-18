import { checkAdmin, userMiddlewares } from '../middlewares/users.middlewares';

import express from 'express';
import { foodController } from '../controllers/foods.controller';

const router = express.Router();

router.post('/foods', foodController.create);
router.get('/foods', foodController.getAll);
router.get('/foods/:id', foodController.getOne);
router.put('/foods/:id', foodController.update);
router.delete('/foods/:id', foodController.delete);

export default router;
