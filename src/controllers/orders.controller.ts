import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statusCodes from '../statusCode';

const findAll = async (_req: Request, res: Response) => {
  const findAllProducts = await ordersService.findAll();
  
  res.status(statusCodes.OK).json(findAllProducts);
};

export default {
  findAll,
};