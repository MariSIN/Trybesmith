import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import newOrder from '../middlewares/newOrder';
import token from '../middlewares/token';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.findAll);
ordersRouter.post('/', token.validateToken, newOrder.validateProductsIds, ordersController.create);

export default ordersRouter;