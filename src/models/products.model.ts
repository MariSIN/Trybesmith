import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/products.interface';

import connection from './connection';

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: insertId, name, amount };
};

export default {
  createProduct,
};