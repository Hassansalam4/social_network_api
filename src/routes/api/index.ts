// src/routes/reactionRoutes.ts
import express from 'express';
import {
  createReaction,
  deleteReaction,
} from '../controllers/reactionController';

const router = express.Router();

router.post('/:thoughtId/reactions', createReaction);
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

export default router;
