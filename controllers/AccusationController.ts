import express from 'express';
import { Accusation } from '../model/Accusation';
import { AccusationAdd } from '../services/AccusationService';

const router = express.Router();

exports.saveAccusation = async(req : any, res : any) => {
  const accusation = req.body;
  console.log("AccusationL: ", accusation);

  try {
    const addAccusation = await AccusationAdd(accusation);
    res.send(200).json(addAccusation);
  } catch (error) {
    console.error("Erro Adding Accusation: ", error);

  }
}


