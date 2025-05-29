import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';

dotenv.config();

import guestRouters from './routes/guestRouter';
import accusationRouters from './routes/accusationRouter';
import roomRouters from './routes/roomRouter';
import bookingRouter from './routes/bookingRouter';
import serviceRouter from './routes/serviceRouter';
import employeeRouter from './routes/employeeRouter';
import houseKeepingRouter from './routes/houseKeepingRouter';
import paymentRouter from './routes/paymentRouter';
import usageRouter from './routes/usageRouter';
import AuthController from './controllers/AuthController';

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(fileUpload());

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', guestRouters);
app.use('/api', accusationRouters);
app.use('/api', roomRouters);
app.use('/api', bookingRouter);
app.use('/api', serviceRouter);
app.use('/api', employeeRouter);
app.use('/api', houseKeepingRouter);
app.use('/api', paymentRouter);
app.use('/api', usageRouter);
app.use('/api/auth', AuthController);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
