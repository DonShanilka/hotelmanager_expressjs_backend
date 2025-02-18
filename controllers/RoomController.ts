import multer from 'multer';
import { prisma } from '../db/Prisma_data_storage';
import { Room } from '../model/Room';
import { Request, Response } from 'express';
import { getAll, RoomAdd, RoomDelete, RoomUpdate } from '../services/RoomService';
import { extractImages } from '../extractImages/extractImages';

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage }); 

exports.saveRoom = async (req: Request, res: Response) => {

  const room: Room = req.body;
  room.selectedImage = extractImages(req);
  console.log("Recevied Room", room);

  try {
      const newRoom = await RoomAdd(room);
      console.log("Room Added Successfully:", newRoom);
      return res.status(201).json(newRoom); 

  } catch (error) {
    console.error("Error Adding Room:", error);
    return res.status(500).json({ error: "Failed to add room" });
  }
};

exports.updateRoom = async (req : any, res : any) => {
  const id = req.params.id;
  const room : Room = req.body;

  try {
    await RoomUpdate(id, room);
    res.send("Room Update");
  } catch (error) {
    console.log("Error Updating Room: ", error);
  }
};

exports.deletRoom = async (req : any, res : any) => {
  const id  = req.params.id;

  try {
    await RoomDelete(id);
    res.send("Room Deleted");
  } catch (error) {
    console.log("Error Deleteing Room", error);
  }
};

exports.getAllRooms = async (req : any, res : any) => {
  try {
    const room = await getAll();
    console.log(res.json(room));
  } catch (error) {
    console.log("Rooms Getting Error: ", error);
  }
}