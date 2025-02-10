import { prisma } from "../db/Prisma_data_storage";
import { Booking } from "../model/Booking";


export async function BookingAdd(booking: Booking) {
  try {
    const newBooking = await prisma.booking.create({
      data: {
        bookingID : booking.bookingID,
        guestID : booking.guestID,
        roomNumber : booking.roomNumber,
        checkInDate : booking.checkInDate,
        checkOutDate : booking.checkOutDate,
        totalAmount : booking.totalAmount,
        totalNight : booking.totalNight,
        bookingStatus : booking.bookingStatus,
        createdAt : booking.createdAt,
      }
    });
    console.log("Adding Success Booking", newBooking)
    return newBooking;
  } catch (error) {
    console.error('Error adding Booking:', error);
    throw error;
  }
}

export async function BookingUpdate(id: number, booking: Booking) {
  try {

    const existingBooking = await prisma.booking.findUnique({
      where: {bookingID: id },
    });

    if (!existingBooking) {
      throw new Error(`Booking ID ${id} not found`);
    }

    const bookingUpdate = await prisma.booking.update({
      where: {bookingID : id},
      data : {
        bookingID : booking.bookingID,
        guestID : booking.guestID,
        roomNumber : booking.roomNumber,
        checkInDate : booking.checkInDate,
        checkOutDate : booking.checkOutDate,
        totalAmount : booking.totalAmount,
        totalNight : booking.totalNight,
        bookingStatus : booking.bookingStatus,
        createdAt : booking.createdAt,
      }
    })
    // alert("Success Fully Updated Guest: ");
    console.log("Success Fully Updated Booking: ", bookingUpdate);
  } catch (error) {
    console.log("Error", error);
  }
}

// export async function GuestDelete(id : string) {
//   try {

//     const existingGuest = await prisma.guest.findUnique({
//       where: {guestId: id },
//     });

//     if (!existingGuest) {
//       throw new Error(`Guest with ID ${id} not found`);
//     }

//     await prisma.guest.delete({
//       where: {guestId : id}
//     });
//     console.log("Success Fully Deleted Guest: ");
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// export async function getAllGuest() {
//   try {
//     const allGuest = await prisma.guest.findMany();
//     console.log("All Guest: ", allGuest);
//     return allGuest;
//   } catch (error) {
//     console.log("Error", error);
//   }
// }