import { Request, Response } from 'express';
import createToken from '../auth/token';
import userService from '../services/user.service';
import statusCodes from '../statusCode';

const create = async (req: Request, res: Response) => {
  const user = req.body;
  const { id, name } = user;

  await userService.create(user);

  const token = createToken({ id, name });

  res.status(statusCodes.CREATED).json({ token });
};

export default {
  create,
};