const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
import fileUpload from "express-fileupload";
import dotenv from 'dotenv';
dotenv.config();

const guestRouters = require('./routes/guestRouter');
const accusationRouters = require('./routes/AccusationRouter');
const roomRouters = require('./routes/roomRouter');
const bookingRouter = require('./routes/bookingRouter');
const serviceRouter = require('./routes/serviceRouter');
const employeeRouter = require('./routes/employeeRouter');
const houseKeepingRouter = require('./routes/houseKeepingRouter');
const paymentRouter = require('./routes/paymentRouter');
const usageRouter = require('./routes/usageRouter');
import AuthController, {authenticationToken} from "./controllers/AuthController";

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(fileUpload());

app.use('/',(req : any, res : any, next : any)=>{
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/api', guestRouters);
app.use('/api', accusationRouters);
app.use('/api', roomRouters);
app.use('/api', bookingRouter);
app.use('/api', serviceRouter);
app.use('/api', employeeRouter);
app.use('/api', houseKeepingRouter);
app.use('/api', paymentRouter);
app.use('/api', usageRouter);
app.use('/api/auth',AuthController)

// app.use("/downloads", express.static("downloads"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
