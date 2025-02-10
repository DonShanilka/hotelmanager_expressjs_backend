import express from 'express';
import { BookingAdd, BookingUpdate } from '../services/BookingService';
import { Booking } from '../model/Booking';

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

exports.updateBooking = async (req : any, res : any) => {
  const id = req.params.id;
  console.log("Booking Update: ", id);
  const booking : Booking = req.body;

  try {
    await BookingUpdate(id, booking);
    res.send("Booking Update")
  } catch (error) {
    console.log("Error Update Booking: ", error);
  }
};

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