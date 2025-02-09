import { Request, Response } from "express";
import fileUpload, { UploadedFile } from "express-fileupload";
import { prisma } from "../db/Prisma_data_storage";
import { Room } from "../model/Room";
import { RoomAdd } from "../services/RoomService";
import { extractImages } from "../extractImages/extractImages";

export const saveRoom = async (req: Request, res: Response) => {
  try {
    const image : any = extractImages(req);
    const selectedImage = image instanceof Buffer ? image.toString('base64') : image;
    // Extract room data from request
    const { roomNumber, roomType, hallFloor, price, status } = req.body;
    const hallFloorNum = parseInt(hallFloor, 10);
    const priceNum = parseFloat(price);

    const roomData: Room = {
      roomNumber,
      roomType,
      selectedImage: image, // Save the file path in DB
      hallFloor: hallFloorNum,
      price: priceNum,
      status,
    };

    const newRoom = await RoomAdd(roomData);
    res.status(200).json(newRoom);
  } catch (error) {
    console.error("Error Adding Room:", error);
    res.status(500).json({ error: "Error Adding Room" });
  }
};