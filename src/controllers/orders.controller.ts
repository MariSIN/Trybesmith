import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statusCodes from '../statusCode';

const findAll = async (_req: Request, res: Response) => {
  const order = await ordersService.findAll();
  
  res.status(statusCodes.OK).json(order);
};

const create = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { id } = req.body.userToken;
  await ordersService.create({ userId: id, productsIds });
  
  res.status(statusCodes.CREATED).json({ userId: id, productsIds });
};

export default {
  findAll,
  create,
};