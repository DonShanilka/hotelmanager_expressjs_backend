import express from 'express';
import { BookingAdd } from '../services/BookingService';

const router = express.Router();

exports.saveBooking = async (req : any, res : any) => {
  const booking = req.body;
  console.log("Received Booking: ", booking);

  try {
    const addBooking = await BookingAdd(booking);
    res.status(200).json(addBooking);
  } catch (error) {
    console.error("Error Adding Booking: ", error);
    res.status(400).send("Error Adding Booking");
  }
};

// exports.update = async (req : any, res : any) => {
//   const id = req.params.id;
//   console.log("Customer Id for Update: ", id);
//   const guest : Guest = req.body;

//   try {
//     await GuestUpdate(id, guest);
//     res.send("Guest Update")
//   } catch (error) {
//     console.log("Error Update Guest: ", error);
//   }
// };

// exports.delete = async (req : any, res : any) => {
//   const id = req.params.id;

//   try {
//     await GuestDelete(id);
//     res.send("Guest Deleted");
//   } catch (error) {
//     console.log("Error Delete Guest", error);
//   }
// };

// exports.getAll = async (req : any, res : any) => {
//   try {
//     const guest = await getAllGuest();
//     console.log(res.json(guest));
//   } catch (error) {
//     console.log("error Getting Guest", error);
//   }
// };

export default router;