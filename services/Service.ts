import { prisma } from '../db/Prisma_data_storage';
import { Service } from '../model/Service';


export async function ServiceAdd(service : Service) {
  try {
    const newService = await prisma.service.create({
      data: {
        serviceName : service.serviceName,
        servicePrice : service.servicePrice,
        description : service.description,
        createdAt : service.createdAt
      },
    });

    console.log("Service Added Successfully:", newService);
    return newService; 
  } catch (error) {
    console.error("Error Adding Service:", error);
    throw new Error("Failed to add Service"); 
  }
}

export async function ServiceUpdate(id : number, service : Service) {
  try {
    const existingService = await prisma.service.findUnique({
      where : {serviceID : id},
    });

    if (!existingService) {
      throw new Error(`${id} Service ID not found`);
    }

    const serviceUpdate = await prisma.service.update({
      where: {serviceID : id},
      data : {
        serviceName : service.serviceName,
        servicePrice : service.servicePrice,
        description : service.description,
        createdAt : service.createdAt
      }
    });
    console.log("Success Full Update Service", serviceUpdate);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function ServiceDelete(id : number) {
  try {
    const existingService = await prisma.service.findUnique({
      where : {serviceID : id}
    });

    if (!existingService) {
      throw new Error(`${id} Service ID not found`);
    }

    await prisma.service.delete({
      where : {serviceID : id}
    });
    
    console.log("Success Fully Deleted Service", id);
  } catch (error) {
    console.log("Error", error);
  }
}

// export async function getAll(){
//   try {
//     const getAll = await prisma.room.findMany();
//     console.log(getAll);
//     return getAll;
//   } catch (error) {
//     console.log("Error", error);
//   }
// }