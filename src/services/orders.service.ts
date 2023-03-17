import { INewOrder, IOrder } from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';

const findAll = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAllOrders();

  return orders;
};

const create = async (newOrder:INewOrder): Promise<number> => {
  const orderId = await ordersModel.insertOrders(newOrder.userId as number);

  const addNewOrder = newOrder.productsIds
    .map((prodId) => productsModel.updateProducts(orderId, prodId));
    
  await Promise.all(addNewOrder);
  
  return orderId;
};

export default {
  findAll,
  create,
};