import { Router } from 'express';

import {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} from '../../controllers/thoughtsController.js';

const router = Router();

// GET all thoughts and POST a new thought
router.route('/')
  .get(getAllThoughts)      // GET /api/thoughts
  .post(createThought);     // POST /api/thoughts

// GET, PUT, DELETE a thought by ID
router.route('/:id')
  .get(getThoughtById)      // GET /api/thoughts/:id
  .put(updateThought)       // PUT /api/thoughts/:id
  .delete(deleteThought);   // DELETE /api/thoughts/:id

// Add and remove a reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);       // POST /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);  // DELETE /api/thoughts/:thoughtId/reactions/:reactionId

export {router as thoughtRouter};
