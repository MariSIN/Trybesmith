import { Request, Response } from 'express';
import createToken from '../auth/token';
import loginService from '../services/login.service';
import statusCodes from '../statusCode';

const login = async (req: Request, res: Response) => {
  const user = req.body;

  const findUser = await loginService.login(user);

  const { password, ...rest } = findUser;

  const token = createToken(rest);
  
  res.status(statusCodes.OK).json({ token });
};

export default {
  login,
};