import {prisma} from '../db/Prisma_data_storage';
import { Room } from '../model/Room';

export async function RoomAdd(room : Room) {
  try {
    const newRoom = await prisma.room.create({
      data : {
        roomNumber : room.roomNumber,
        roomType : room.roomType,
        selectedImage : room.selectedImage ?? "",
        hallFloor : room.hallFloor,
        price : room.price,
        status : room.status
      }
    });
    console.log("Adding Success Room: ", newRoom);
  } catch (error) {
    console.error("Error Adding Rooms: ", error);
  }
}