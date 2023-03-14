import { Request, Response } from 'express';
import productsService from '../services/products.service';
import statusCodes from '../statusCode';

const create = async (req: Request, res: Response) => {
  const product = req.body;

  const productCreated = await productsService.create(product);
  res.status(statusCodes.CREATED).json(productCreated);
};

const findAll = async (_req: Request, res: Response) => {
  const findAllProducts = await productsService.findAll();
  res.status(statusCodes.OK).json(findAllProducts);
};

export default {
  create,
  findAll,
};