import { prisma } from "../db/Prisma_data_storage";
import { Guest } from "../model/Guest";

export async function GuestAdd(guest: Guest) {
  try {
    const newGuest = await prisma.guest.create({
      data: {
        guestId: guest.guestId,
        guestName: guest.guestName, 
        contactNumber: guest.contactNumber, 
        email: guest.email,
        roomNumber: guest.roomNumber,
        checkInDate: guest.checkInDate,
        checkOutDate: guest.checkOutDate,
        nation: guest.nation 
      }
    });
    console.log("Adding Success Guest", newGuest)
    return newGuest;
  } catch (error) {
    console.error('Error adding guest:', error);
    throw error;
  }
}

export async function GuestUpdate(id: string, guest: Guest) {
  try {

    const existingGuest = await prisma.guest.findUnique({
      where: {guestId: id },
    });

    if (!existingGuest) {
      throw new Error(`Guest with ID ${id} not found`);
    }

    const guestUpdate = await prisma.guest.update({
      where: {guestId : id},
      data : {
        guestName: guest.guestName,
        contactNumber: guest.contactNumber,
        email: guest.email,
        roomNumber: guest.roomNumber,
        checkInDate: guest.checkInDate,
        checkOutDate: guest.checkOutDate,
        nation: guest.nation,
      }
    })
    // alert("Success Fully Updated Guest: ");
    console.log("Success Fully Updated Guest: ", guestUpdate);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function GuestDelete(id : string) {
  try {
    const existingGuest = await prisma.guest.findUnique({
      where: {guestId: id },
    });

    if (!existingGuest) {
      throw new Error(`Guest with ID ${id} not found`);
    }

    await prisma.guest.delete({
      where: {guestId : id}
    });
    console.log("Success Fully Deleted Guest: ");
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllGuest() {
  try {
    const allGuest = await prisma.guest.findMany();
    console.log("All Guest: ", allGuest);
    return allGuest;
  } catch (error) {
    console.log("Error", error);
  }
}