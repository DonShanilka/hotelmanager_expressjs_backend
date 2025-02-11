import express from 'express';
import { HouseKeepingAdd, HouseKeepingUpdate } from '../services/HouseKeeping';
import { HouseKeeping } from '../model/HouseKeeping';

const router = express.Router();

exports.saveHouseKeeping = async (req : any, res : any) => {
  const houseKeeping = req.body;
  console.log("Received HouseKeeping: ", houseKeeping);

  try {
    const addHouseKeeping = await HouseKeepingAdd(houseKeeping);
    res.status(200).json(addHouseKeeping);
  } catch (error) {
    console.error("Error Adding HouseKeeping: ", error);
    res.status(400).send("Error Adding HouseKeeping")
  }
};

exports.updateHouseKeeping = async (req : any, res : any) => {
  const id = req.params.id;
  console.log("Guest Id for Update: ", id);
  const houseKeeping : HouseKeeping = req.body;

  try {
    await HouseKeepingUpdate(id, houseKeeping);
    res.send("Guest HouseKeeping")
  } catch (error) {
    console.log("Error Update HouseKeeping: ", error);
  }
};