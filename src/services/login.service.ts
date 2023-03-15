import { ILogin } from '../interfaces/login.interface';
import usersModel from '../models/users.model';

const login = async (user:ILogin): Promise<ILogin> => {
  const { username } = user;
  const name = await usersModel.getUserByUsername(username);

  return name;
};

export default {
  login,
};