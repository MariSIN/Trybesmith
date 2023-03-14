import { IUser } from '../interfaces/users.interface';
import usersModel from '../models/users.model';

const create = async (user: IUser): Promise<IUser> => {
  const products = await usersModel.createUser(user);
  return products;
};

export default {
  create,
};