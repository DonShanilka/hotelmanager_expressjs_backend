import express from 'express';
import { getAllUsage, UsageAdd, UsageDelete, UsageUpdate } from '../services/ServiceUsage';
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

exports.deleteUsage = async (req : any, res : any) => {
  const id = Number(req.params.id);

  try {
    await UsageDelete(id);
    res.send("Usage Deleted");
  } catch (error) {
    console.log("Error Delete Usage", error);
  }
};

exports.getAllUsage = async (req : any, res : any) => {
  try {
    const usage = await getAllUsage();
    console.log(res.json(usage));
  } catch (error) {
    console.log("error Getting Usage", error);
  }
};

export default router;