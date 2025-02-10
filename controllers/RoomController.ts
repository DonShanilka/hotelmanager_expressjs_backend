import multer from 'multer';
import { prisma } from '../db/Prisma_data_storage';
import { Room } from '../model/Room';
import { Request, Response } from 'express';
import { getAll, RoomDelete, RoomUpdate } from '../services/RoomService';

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage }); 

exports.saveRoom = async (req: Request, res: Response) => {
  try {
    
    upload.single('selectedImage')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: "File upload error" });
      }

      const { roomNumber, roomType, hallFloor, price, status } = req.body;
      const selectedImage = req.file ? req.file.buffer : Buffer.alloc(0); // If file 
      
      if (!roomNumber || !roomType || !hallFloor || !price || !status) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const roomData: Room = {
        roomNumber: roomNumber, 
        roomType,
        selectedImage,
        hallFloor: parseInt(hallFloor),   
        price: parseFloat(price),         
        status,
      };

      const newRoom = await prisma.room.create({
        data: roomData,
      });

      console.log("Room Added Successfully:", newRoom);
      return res.status(201).json(newRoom); 
    });

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