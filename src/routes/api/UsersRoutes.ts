// src/routes/userRoutes.ts
import express from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

export default router;


