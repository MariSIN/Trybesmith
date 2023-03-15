import { IOrder } from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';

const findAll = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAllOrders();

  return orders;
};

export default {
  findAll,
};