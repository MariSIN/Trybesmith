import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/orders.interface';

import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const query = `SELECT orders.id, orders.user_id AS userId,
  JSON_ARRAYAGG(products.id) AS productsIds
  FROM Trybesmith.orders AS orders
  INNER JOIN
  Trybesmith.products AS products
  ON products.order_id = orders.id
  GROUP BY orders.id`;
  const [result] = await connection.execute<RowDataPacket[] & IOrder[]>(query);
  return result;
};

export default {
  getAllOrders,
};