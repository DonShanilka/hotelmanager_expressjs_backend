import { prisma } from '../db/Prisma_data_storage';
import { ServiceUsage } from '../model/ServiceUsage';


export async function ServiceUsageAdd(serviceUsage : ServiceUsage) {
  try {
    const newService = await prisma.serviceUsage.create({
      data: {
        bookingID : serviceUsage.bookingID,
        guestId : serviceUsage.guestId,
        serviceID : serviceUsage.serviceID,
        quantity : serviceUsage.quantity,
        totalCost : serviceUsage.totalCost,
        usageDate : serviceUsage.usageDate
      },
    });

    console.log("ServiceUsage Added Successfully:", newService);
    return newService; 
  } catch (error) {
    console.error("Error Adding ServiceUsage:", error);
    throw new Error("Failed to add ServiceUsage"); 
  }
}
