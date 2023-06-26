import express from 'express';
import { socialController } from '../controllers/social.controller.js';

const router = express.Router();

router.post('/social', socialController.create);
router.get('/socials', socialController.getAll);
router.get('/social/:id', socialController.getOne);
router.put('/social/:id', socialController.update);
router.delete('/social/:id', socialController.delete);

export default router;
