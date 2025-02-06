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
    console.log("Success Fully Added Guest: ", newGuest);
  } catch (error) {
    console.log("Error",error);
  }
}

export async function GuestUpdate(guest: Guest) {
  try {
    const guestUpdate = await prisma.guest.update({
      where: {id : guest.guestId},
      date : {
        guestName: guest.guestName,
        contactNumber: guest.contactNumber,
        email: guest.email,
        roomNumber: guest.roomNumber,
        checkInDate: guest.checkInDate,
        checkOutDate: guest.checkOutDate,
        nation: guest.nation,
      }
    })
    alert("Success Fully Updated Guest: ");
    console.log("Success Fully Updated Guest: ", guestUpdate);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function GuestDelete(id : string) {
  try {
    await prisma.guest.delete({
      where: {id : id}
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