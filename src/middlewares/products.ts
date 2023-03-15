import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCode';

const validateProductName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: '"name" is required',
    });
  }

  if (typeof name !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"name" must be a string',
    });
  }

  if (name.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"name" length must be at least 3 characters long',
    });
  }

  next();
};

const validateProductAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  
  if (!amount) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: '"amount" is required',
    });
  }
  
  if (typeof amount !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"amount" must be a string',
    });
  }
  
  if (amount.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }
  
  next();
};

export default {
  validateProductName,
  validateProductAmount,
};