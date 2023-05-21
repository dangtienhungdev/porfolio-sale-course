import {
	addMessage,
	getAllMessages,
} from '../controllers/message.controllers.js';

import express from 'express';

const router = express.Router();

router.post('/add-message', addMessage);
router.post('/messages', getAllMessages);

export default router;
