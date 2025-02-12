import express from 'express';
import { getAllHouseKeeping, HouseKeepingAdd, HouseKeepingDelete, HouseKeepingUpdate } from '../services/HouseKeeping';
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
  const id = Number(req.params.id);
  console.log("HouseKeeping Id for Update: ", id);
  const houseKeeping : HouseKeeping = req.body;

  try {
    await HouseKeepingUpdate(id, houseKeeping);
    res.send("Update HouseKeeping")
  } catch (error) {
    console.log("Error Update HouseKeeping: ", error);
  }
};

exports.deleteHouseKeeping = async (req : any, res : any) => {
  const id = Number(req.params.id);

  try {
    await HouseKeepingDelete(id);
    res.send("HouseKeeping Deleted");
  } catch (error) {
    console.log("Error Delete HouseKeeping", error);
  }
};

exports.getAllHouseKeeping = async (req : any, res : any) => {
  try {
    const houseKeeping = await getAllHouseKeeping();
    console.log(res.json(houseKeeping));
  } catch (error) {
    console.log("error Getting HouseKeeping", error);
  }
};

export default router;