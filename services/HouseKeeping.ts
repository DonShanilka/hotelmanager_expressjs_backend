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
};

export async function HouseKeepingUpdate(id: number, houseKeeping : HouseKeeping) {
  try {

    const existingHouseKeeping = await prisma.houseKeeping.findUnique({
      where: {houseKeepingId: id },
    });

    if (!existingHouseKeeping) {
      throw new Error(`HouseKeeping with ID ${id} not found`);
    }

    const houseKeepingUpdate = await prisma.houseKeeping.update({
      where: {houseKeepingId : id},
      data : {
        roomNumber : houseKeeping.roomNumber,
        cleaningDate : houseKeeping.cleaningDate,
        status : houseKeeping.status,
        specialTasks : houseKeeping.specialTasks,
        empId : houseKeeping.empId
      }
    })
    // alert("Success Fully Updated Guest: ");
    console.log("Success Fully Updated HouseKeeping: ", houseKeepingUpdate);
  } catch (error) {
    console.log("Error", error);
  }
}