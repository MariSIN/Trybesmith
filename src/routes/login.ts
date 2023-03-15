import { Router } from 'express';
import loginController from '../controllers/login.controller';
import login from '../middlewares/login';

const loginRouter = Router();

loginRouter.post('/', login.validateLogin, loginController.login);

export default loginRouter;