import {prisma} from '../db/Prisma_data_storage';
import { Room } from '../model/Room';

export async function RoomAdd(room: Room) {
  try {
    const newRoom = await prisma.room.create({
      data: {
        roomNumber: room.roomNumber,
        roomType: room.roomType,
        selectedImage: room.selectedImage, // Ensure it's a string
        hallFloor: room.hallFloor,
        price: room.price,
        status: room.status,
      },
    });

    console.log("Room Added Successfully:", newRoom);
    return newRoom; // Return created room
  } catch (error) {
    console.error("Error Adding Room:", error);
    throw new Error("Failed to add room"); // Throw for higher-level handling
  }
}
