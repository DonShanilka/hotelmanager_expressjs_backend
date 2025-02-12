import express from 'express';
import { UsageAdd } from '../services/ServiceUsage';

const router = express.Router();

exports.saveUsage = async (req : any, res : any) => {
  const usage = req.body;
  console.log("Received Usage: ", usage);

  try {
    const addUsage = await UsageAdd(usage);
    res.status(200).json(addUsage);
  } catch (error) {
    console.error("Error Adding Usage: ", error);
    res.status(400).send("Error Adding Usage");
  }
};