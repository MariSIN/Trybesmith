import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productRouter = Router();

productRouter.post('/', productsController.create);

export default productRouter;
