import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const insertOrders = async (userId: number): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [{ insertId }] = await connection
    .execute<RowDataPacket[] & ResultSetHeader>(query, [userId]);

  return insertId;
}; 

export default {
  getAllOrders,
  insertOrders,
};