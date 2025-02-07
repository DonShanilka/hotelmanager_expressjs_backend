import multer from "multer";
import express from 'express';
import path from "path";
import { RoomAdd } from "../services/RoomService";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads/", // Local folder where images will be stored
  filename: (req : any, file : any, cb : any) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage });

exports.saveRoom = async (req : any, res : any) => {
  const roomData = JSON.parse(req.body); // Convert stringified JSON to object
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null; // Get uploaded image path
    // Include image URL in guest data
    roomData.selectedImage = imagePath;

  console.log("Received Guest Data: ", roomData);

  try {
    const addRoom = await RoomAdd(roomData);
    res.status(200).json(addRoom);
    console.log("Add Room: ", addRoom);
  } catch (error) {
    console.log("Error Adding Room ", error);
    res.status(400).send("Error Adding Room");
  }
}

export default router;