import { Router } from 'express';
import productsController from '../controllers/products.controller';
import products from '../middlewares/products';

const productRouter = Router();

productRouter.post(
  '/', 
  products.validateProductName, 
  products.validateProductAmount,
  productsController.create,
);
productRouter.get('/', productsController.findAll);

export default productRouter;
