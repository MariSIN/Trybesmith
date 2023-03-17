import express from 'express';
import loginRouter from './routes/login';
import ordersRouter from './routes/orders';
import productRouter from './routes/products';
import userRouter from './routes/users';

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', ordersRouter);

export default app;
