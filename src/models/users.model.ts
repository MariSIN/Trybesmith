import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/users.interface';
import connection from './connection';

const createUser = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users 
  (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query,
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

export default {
  createUser,
};