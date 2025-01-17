import { Router } from 'express';
import { userRouter }from './UsersRoutes.js';
import {thoughtRouter}  from './thoughts-Routes.js';


const router = Router();

// Mount the thoughtRouter on the '/thoughts' route
router.use('/thoughts', thoughtRouter);

router.use('/users', userRouter);

export default router;