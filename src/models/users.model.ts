import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/login.interface';
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

const getUserByUsername = async (username: string): Promise<ILogin> => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const [[user]] = await connection.execute<RowDataPacket[] & ILogin[]>(query, [username]);
  return user;
};

export default {
  createUser,
  getUserByUsername,
};