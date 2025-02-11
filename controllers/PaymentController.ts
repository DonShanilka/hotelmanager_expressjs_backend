import express from 'express';
import { PaymentAdd, PaymentUpdate } from '../services/PaymentService';
import { Payment } from '../model/Payment';

const router = express.Router();

exports.savePayment = async (req : any, res : any) => {
  const payment = req.body;
  console.log("Received Payment: ", payment);

  try {
    const addPayment = await PaymentAdd(payment);
    res.status(200).json(addPayment);
  } catch (error) {
    console.error("Error Adding Payment: ", error);
    res.status(400).send("Error Adding Payment");
  }
};

exports.updatePayment = async (req : any, res : any) => {
  const id = req.params.id;
  console.log("Payment Id for Update: ", id);
  const payment : Payment = req.body;

  try {
    await PaymentUpdate(id, payment);
    res.send("Payment Update")
  } catch (error) {
    console.log("Error Update Payment: ", error);
  }
};