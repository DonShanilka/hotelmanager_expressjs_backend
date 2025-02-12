import express from 'express';
import { UsageAdd, UsageUpdate } from '../services/ServiceUsage';
import { ServiceUsage } from '../model/ServiceUsage';

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

exports.updateUsage = async (req : any, res : any) => {
  const id = Number(req.params.id);
  console.log("Usage Update: ", id);
  const service : ServiceUsage = req.body;

  try {
    await UsageUpdate(id, service);
    res.send("Usage Update")
  } catch (error) {
    console.log("Error Update Usage: ", error);
  }
};