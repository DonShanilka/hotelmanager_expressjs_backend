import { prisma } from "../db/Prisma_data_storage";
import { HouseKeeping } from "../model/HouseKeeping";

export async function HouseKeepingAdd(houseKeeping: HouseKeeping) {
  try {
    const newGuest = await prisma.houseKeeping.create({
      data: {
        roomNumber : houseKeeping.roomNumber,
        cleaningDate : houseKeeping.cleaningDate,
        status : houseKeeping.status,
        specialTasks : houseKeeping.specialTasks,
        empId : houseKeeping.empId
      }
    });
    console.log("Adding Success HouseKeeping", newGuest)
    return newGuest;
  } catch (error) {
    console.error('Error adding HouseKeeping:', error);
    throw error;
  }
}