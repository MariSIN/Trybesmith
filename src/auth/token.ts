import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export default function createToken(payload:object) {
  const config : SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret as string, config);
  
  return token;
}

export const verifyToken = (tk:string) => jwt.verify(tk, secret as string);
