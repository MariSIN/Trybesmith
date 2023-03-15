import { NextFunction, Request, Response } from 'express';
import usersModel from '../models/users.model';
import statusCodes from '../statusCode';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: '"username" is required',
    });
  }

  if (!password) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: '"password" is required',
    });
  }

  const user = await usersModel.getUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(statusCodes.UNAUTHORIZED).json({
      message: 'Username or password invalid',
    });
  }
  next();
};

export default {
  validateLogin,
};