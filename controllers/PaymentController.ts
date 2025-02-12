import express from 'express';
import { getAllPayment, PaymentAdd, PaymentDelete, PaymentUpdate } from '../services/PaymentService';
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
  const id = Number(req.params.id);
  console.log("Payment Id for Update: ", id);
  const payment : Payment = req.body;

  try {
    await PaymentUpdate(id, payment);
    res.send("Payment Update")
  } catch (error) {
    console.log("Error Update Payment: ", error);
  }
};

exports.deletePayment = async (req : any, res : any) => {
  const id = Number(req.params.id);

  try {
    await PaymentDelete(id);
    res.send("Payment Deleted");
  } catch (error) {
    console.log("Error Delete Payment", error);
  }
};

exports.getAllPayment = async (req : any, res : any) => {
  try {
    const payment = await getAllPayment();
    console.log(res.json(payment));
  } catch (error) {
    console.log("error Getting Payment", error);
  }
};

export default router;