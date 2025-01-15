// src/routes/thoughtRoutes.ts
import express from 'express';
import {
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
} from '../../controllers/thoughtController';

const router = express.Router();

router.get('/', getThoughts);
router.post('/', createThought);
router.put('/:thoughtId', updateThought);
router.delete('/:thoughtId', deleteThought);

export default router;
