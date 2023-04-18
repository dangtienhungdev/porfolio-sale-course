import express from 'express';
import { reviewControllers } from '../controllers/reviews.controller';

const router = express.Router();

router.post('/reviews', reviewControllers.createReview);
router.get('/reviews', reviewControllers.getAllReviews);
router.get('/reviews/:id', reviewControllers.getOneReview);
router.put('/reviews/:id', reviewControllers.updateReview);
router.delete('/reviews/:id', reviewControllers.deleteReview);

export default router;
