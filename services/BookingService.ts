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

export async function BookingDelete(id : number) {
  try {

    const existingBooking = await prisma.booking.findUnique({
      where: {bookingID: id },
    });

    if (!existingBooking) {
      throw new Error(`Booking ID ${id} not found`);
    }

    await prisma.booking.delete({
      where: {bookingID : id}
    });
    console.log("Success Fully Deleted Booking: ");
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllBooking() {
  try {
    const allBooking = await prisma.booking.findMany();
    console.log("All Booking: ", allBooking);
    return allBooking;
  } catch (error) {
    console.log("Error", error);
  }
}