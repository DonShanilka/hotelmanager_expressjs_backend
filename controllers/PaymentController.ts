import express from 'express';
import { PaymentAdd } from '../services/PaymentService';

const router = express.Router();

exports.savePayment = async (req : any, res : any) => {
  const payment = req.body;
  console.log("Received Payment: ", payment);

  try {
    const addPayment = await PaymentAdd(payment);
    res.status(200).json(addPayment);
  } catch (error) {
    console.error("Error Adding Payment: ", error);
    res.status(400).send("Error Adding Payment")
  }
};