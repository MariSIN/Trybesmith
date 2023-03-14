import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productRouter = Router();

productRouter.post('/', productsController.create);
productRouter.get('/', productsController.findAll);

export default productRouter;
