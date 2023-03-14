import { IProduct } from '../interfaces/products.interface';
import productsModel from '../models/products.model';

const create = async (product: IProduct): Promise<IProduct> => {
  const products = await productsModel.createProduct(product);
  return products;
};

const findAll = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};

export default {
  create,
  findAll,
};