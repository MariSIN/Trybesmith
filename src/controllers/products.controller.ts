import { Request, Response } from 'express';
import productsService from '../services/products.service';
import statusCodes from '../statusCode';

const create = async (req: Request, res: Response) => {
  const product = req.body;

  const productCreated = await productsService.create(product);
  res.status(statusCodes.CREATED).json(productCreated);
};

export default {
  create,
};