import { prisma } from "../db/Prisma_data_storage";
import { HouseKeeping } from "../model/HouseKeeping";

export async function HouseKeepingAdd(houseKeeping: HouseKeeping) {
  try {

    const date = new Date(houseKeeping.cleaningDate);
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date format for cleaningDate: ${houseKeeping.cleaningDate}`);
    }

    const newGuest = await prisma.houseKeeping.create({
      data: {
        roomNumber : houseKeeping.roomNumber,
        cleaningDate : date.toISOString(),
        status : houseKeeping.status,
        specialTasks : houseKeeping.specialTasks,
        empId: houseKeeping.empId
      }
    });
    console.log("Adding Success HouseKeeping", newGuest)
    return newGuest;
  } catch (error) {
    console.error('Error adding HouseKeeping:', error);
    throw error;
  }
};


export async function HouseKeepingUpdate(id: number, houseKeeping: HouseKeeping) {
  try {
    const existingHouseKeeping = await prisma.houseKeeping.findUnique({
      where: { houseKeepingId: id },
    });

    if (!existingHouseKeeping) {
      throw new Error(`HouseKeeping with ID ${id} not found`);
    }

    const date = new Date(houseKeeping.cleaningDate); // Convert to Date object

    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date format for cleaningDate: ${houseKeeping.cleaningDate}`);
    }

    const roomNumber = String(houseKeeping.roomNumber);

    const houseKeepingUpdate = await prisma.houseKeeping.update({
      where: { houseKeepingId: id },
      data: {
        roomNumber: roomNumber,
        cleaningDate: date.toISOString(), // Convert to ISO format
        status: houseKeeping.status,
        specialTasks: houseKeeping.specialTasks,
        empId: houseKeeping.empId, // Handle undefined empId
      },
    });

    console.log("Successfully Updated HouseKeeping: ", houseKeepingUpdate);
  } catch (error) {
    console.error("Error updating housekeeping:", error);
  }
};


export async function HouseKeepingDelete(id : number) {
  try {
    const existingHouseKeeping = await prisma.houseKeeping.findUnique({
      where: {houseKeepingId: id },
    });

    if (!existingHouseKeeping) {
      throw new Error(`HouseKeeping with ID ${id} not found`);
    }

    await prisma.houseKeeping.delete({
      where: {houseKeepingId : id}
    });
    console.log("Success Fully Deleted HouseKeeping: ");
  } catch (error) {
    console.log("Error", error);
  }
};

export async function getAllHouseKeeping() {
  try {
    const allHouseKeeping = await prisma.houseKeeping.findMany();
    console.log("All HouseKeeping: ", allHouseKeeping);
    return allHouseKeeping;
  } catch (error) {
    console.log("Error", error);
  }
}