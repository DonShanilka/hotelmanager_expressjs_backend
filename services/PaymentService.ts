import { prisma } from "../db/Prisma_data_storage";
import { Payment } from "../model/Payment";


export async function PaymentAdd(payment : Payment) {
  try {
    const newService = await prisma.payment.create({
      data: {
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
        createdAt : payment.createdAt
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
        createdAt : payment.createdAt
      }
    });
    console.log("Success Full Payment Room", roomUpdate);
  } catch (error) {
    console.log("Error", error);
  }
}