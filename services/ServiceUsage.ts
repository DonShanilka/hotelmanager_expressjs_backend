import { prisma } from '../db/Prisma_data_storage';
import { ServiceUsage } from '../model/ServiceUsage';


export async function UsageAdd(serviceUsage : ServiceUsage) {
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
};

export async function UsageUpdate(id : number, serviceUsage : ServiceUsage) {
  try {
    const existingUsage = await prisma.serviceUsage.findUnique({
      where : {usageID : id},
    });

    if (!existingUsage) {
      throw new Error(`${id} Usage ID not found`);
    }

    const serviceUpdate = await prisma.serviceUsage.update({
      where: {usageID : id},
      data : {
        bookingID : serviceUsage.bookingID,
        guestId : serviceUsage.guestId,
        serviceID : serviceUsage.serviceID,
        quantity : serviceUsage.quantity,
        totalCost : serviceUsage.totalCost,
        usageDate : serviceUsage.usageDate
      }
    });
    console.log("Success Full Update Usage", serviceUpdate);
  } catch (error) {
    console.log("Error", error);
  }
};

export async function UsageDelete(id : number) {
  try {
    const existingUsage = await prisma.serviceUsage.findUnique({
      where : {usageID : id}
    });

    if (!existingUsage) {
      throw new Error(`${id} Usage ID not found`);
    }

    await prisma.serviceUsage.delete({
      where : {usageID : id}
    });
    
    console.log("Success Fully Deleted Usage", id);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllUsage(){
  try {
    const getAll = await prisma.serviceUsage.findMany();
    console.log(getAll);
    return getAll;
  } catch (error) {
    console.log("Error", error);
  }
}
