import express from 'express';
import { ServiceAdd } from '../services/Service';

const router = express.Router();

exports.saveService = async (req : any, res : any) => {
  const service = req.body;
  console.log("Received Service: ", service);

  try {
    const addService = await ServiceAdd(service);
    res.status(200).json(addService);
  } catch (error) {
    console.error("Error Adding Service: ", error);
    res.status(400).send("Error Adding Service");
  }
};