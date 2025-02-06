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

router.put("/update/:id", async (req, res) => {
  const id:string = req.params.id;
  console.log("Customer Id for Update: ", id);
  const guest : Guest = req.body;

  try {
    await GuestUpdate(id, guest);
    res.send("Guest Update")
  } catch (error) {
    console.log("Error Update Guest: ", error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id:string = req.params.id;

  try {
    await GuestDelete(id);
    res.send("Guest Deleted");
  } catch (error) {
    console.log("Error Delete Guest", error);
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const guest = await getAllGuest();
    console.log(res.json(guest));
  } catch (error) {
    console.log("error Getting Guest", error);
  }
});

export default router;