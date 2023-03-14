import { IProduct } from '../interfaces/products.interface';
import productsModel from '../models/products.model';

const create = async (product: IProduct): Promise<IProduct> => {
  const products = await productsModel.createProduct(product);
  return products;
};

export default {
  create,
};