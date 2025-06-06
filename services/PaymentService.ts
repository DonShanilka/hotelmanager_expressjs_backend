import { prisma } from "../db/Prisma_data_storage";
import { Payment } from "../model/Payment";


export async function PaymentAdd(payment : Payment) {
  try {
    const totalN = Number(payment.totalNight);
    const bookingId = Number(payment.bookingBookingID);
    const totalPayment = Number(payment.totalPayment);
    const newService = await prisma.payment.create({
      data: {
        roomNumber : payment.roomNumber,
        guestId : payment.guestId,
        guestName : payment.guestName,
        checkInDate : payment.checkInDate,
        checkOutDate : payment.checkOutDate,
        totalNight : totalN,
        roomPerNight : payment.roomPerNight,
        additionalCharges : payment.additionalCharges,
        paymentMethod : payment.paymentMethod,
        totalPayment: totalPayment,
        cashReceive : payment.cashReceive,
        createdAt : payment.createdAt,
        bookingBookingID : bookingId
      },
    });
    console.log("Payment Added Successfully:", newService);
    return newService; 
  } catch (error) {
    console.error("Error Adding Payment:", error);
    throw new Error("Failed to add Payment"); 
  }
};

export async function PaymentUpdate(id : number, payment : Payment) {
  try {
    const existingPayment = await prisma.payment.findUnique({
      where : {paymentId : id},
    });

    if (!existingPayment) {
      throw new Error(`${id} Payment Number not found`);
    }

    const roomUpdate = await prisma.payment.update({
      where: {paymentId : id},
      data : {
        roomNumber : payment.roomNumber,
        guestId : payment.guestId,
        guestName : payment.guestName,
        checkInDate : payment.checkInDate,
        checkOutDate : payment.checkOutDate,
        totalNight : payment.totalNight,
        roomPerNight : payment.roomPerNight,
        additionalCharges : payment.additionalCharges,
        paymentMethod : payment.paymentMethod,
        cashReceive : payment.cashReceive,
        createdAt : payment.createdAt,
        bookingBookingID : payment.bookingBookingID
      }
    });
    console.log("Success Full Payment Room", roomUpdate);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function PaymentDelete(id : number) {
  try {
    const existingPayment = await prisma.payment.findUnique({
      where : {paymentId : id}
    });

    if (!existingPayment) {
      throw new Error(`${id} Payment Number not found`);
    }

    await prisma.payment.delete({
      where : {paymentId : id}
    });
    
    console.log("Success Fully Deleted Payment", id);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllPayment(){
  try {
    const getAll = await prisma.payment.findMany();
    console.log(getAll);
    return getAll;
  } catch (error) {
    console.log("Error", error);
  }
}