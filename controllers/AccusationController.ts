import express from 'express';
import { Accusation } from '../model/Accusation';
import { AccusationAdd, AccusationUpdate } from '../services/AccusationService';

const router = express.Router();

exports.saveAccusation = async (req : any, res : any) => {
  const accusation = req.body;
  console.log("Accusation: ", accusation);

  try {
    const addAccusation = await AccusationAdd(accusation);
    res.send(200).json(addAccusation);
  } catch (error) {
    console.error("Erro Adding Accusation: ", error);
  }
}

exports.updateAccusation = async (req : any, res : any) => {
  const id = req.params.accusationId;
  console.log("Accusation Id For Update: ", id);
  const accusation : Accusation = req.body;

  try {
    await AccusationUpdate(id, accusation);
    res.send("Accusation Updated");
  } catch (error) {
    console.log("Error Update Accusation: ", error);
  }
}
