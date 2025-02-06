import { prisma } from "../db/Prisma_data_storage";
import { Guest } from "../model/Guest";

export async function GuestAdd(guest : Guest) {
  try {
    const newGuest = await prisma.guest.create({
      data: {
        guestName: guest.guestName,
        contactNumber: guest.contactNumber,
        email: guest.email,
        roomNumber: guest.roomNumber,
        checkInDate: guest.checkInDate,
        checkOutDate: guest.checkOutDate,
        nation: guest.nation,
      }
    })
    console.log("Add Customer", newGuest);
  } catch (error) {
    console.log(error);
  }
}