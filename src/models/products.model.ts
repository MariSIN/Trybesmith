import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces/products.interface';

import connection from './connection';

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: insertId, name, amount };
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<RowDataPacket[] & IProduct[]>(query);
  return result;
};

const updateProducts = async (orderId: number, productId: number): Promise<ResultSetHeader> => {
  const query = `UPDATE Trybesmith.products 
  SET order_id = ? WHERE id = ?`;

  const [result] = await connection
    .execute<RowDataPacket[] & ResultSetHeader>(query, [orderId, productId]);

  return result;
};

export default {
  createProduct,
  getAllProducts,
  updateProducts,
};