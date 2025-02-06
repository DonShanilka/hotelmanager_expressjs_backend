import express from 'express';
import { GuestAdd, GuestDelete, GuestUpdate, getAllGuest } from '../services/GuestService';
import { Guest } from '../model/Guest';

const router = express.Router();

router.post("/add", async (req, res) => {
  const guest = req.body;
  console.log("Received Guest: ", guest);

  try {
    const addGuest = await GuestAdd(guest);
    res.status(200).json(addGuest);
  } catch (error) {
    console.error("Error Adding Customer: ", error);
    res.status(400).send("Error Adding Guest")
  }
});