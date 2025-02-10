import express from 'express';
import { BookingAdd, BookingDelete, BookingetAll, BookingUpdate } from '../services/BookingService';
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

exports.deleteBooking = async (req : any, res : any) => {
  const id = req.params.id;

  try {
    await BookingDelete(id);
    res.send("Booking Deleted");
  } catch (error) {
    console.log("Error Delete Booking", error);
  }
};

exports.getAllBooking = async (req : any, res : any) => {
  try {
    const booking = await BookingetAll();
    console.log(res.json(booking));
  } catch (error) {
    console.log("error Getting Booking", error);
  }
};

export default router;