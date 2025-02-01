
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.listen(3000,()=>{
  console.log("Server running on port 3003");
});
