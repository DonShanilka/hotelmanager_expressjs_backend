import { prisma } from "../db/Prisma_data_storage";
import { Payment } from "../model/Payment";


export async function PaymentAdd(Payment : Payment) {
  try {
    const newService = await prisma.payment.create({
      data: {
        roomNumber : Payment.roomNumber,
        guestId : Payment.guestId,
        guestName : Payment.guestName,
        checkInDate : Payment.checkInDate,
        checkOutDate : Payment.checkOutDate,
        totalNight : Payment.totalNight,
        roomPerNight : Payment.roomPerNight,
        additionalCharges : Payment.additionalCharges,
        paymentMethod : Payment.paymentMethod,
        cashReceive : Payment.cashReceive,
        createdAt : Payment.createdAt
      },
    });
    console.log("Payment Added Successfully:", newService);
    return newService; 
  } catch (error) {
    console.error("Error Adding Payment:", error);
    throw new Error("Failed to add Payment"); 
  }
}