import express from 'express';
import { projectController } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/project', projectController.create);
router.delete('/project/:id', projectController.delete);
router.get('/projects', projectController.getAll);
router.get('/project/:id', projectController.getOne);
router.put('/project/:id', projectController.update);

export default router;
