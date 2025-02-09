import multer from 'multer';
import { prisma } from '../db/Prisma_data_storage';
import { Room } from '../model/Room';
import { Request, Response } from 'express';

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store file in memory (Buffer)
const upload = multer({ storage: storage }); // Use multer middleware

// Function to save the room
export async function saveRoom(req: Request, res: Response) {
  try {
    // Use multer middleware to handle file upload and parse form data
    // 'selectedImage' is the name of the file input field in the HTML form
    upload.single('selectedImage')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: "File upload error" });
      }

      // Access form data
      const { roomNumber, roomType, hallFloor, price, status } = req.body;
      const selectedImage = req.file ? req.file.buffer : Buffer.alloc(0); // If file uploaded, get the buffer, else empty buffer

      // Validate form data
      if (!roomNumber || !roomType || !hallFloor || !price || !status) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Prepare room data
      const roomData: Room = {
        roomNumber: roomNumber,  // Assuming roomNumber is a string and needs to be parsed
        roomType,
        selectedImage,
        hallFloor: parseInt(hallFloor),   // Convert floor to number if needed
        price: parseFloat(price),         // Convert price to float
        status,
      };

      // Create a new room in the database
      const newRoom = await prisma.room.create({
        data: roomData,
      });

      console.log("Room Added Successfully:", newRoom);
      return res.status(201).json(newRoom); // Return the created room as a response
    });

  } catch (error) {
    console.error("Error Adding Room:", error);
    return res.status(500).json({ error: "Failed to add room" });
  }
}
