import { Router } from 'express';
import userController from '../controllers/user.controller';
import user from '../middlewares/user';

const userRouter = Router();

userRouter.post(
  '/',
  user.validateUsername, 
  user.validateVocation,
  user.validateLevel,
  user.validatePassword,
  userController.create,
);

export default userRouter;