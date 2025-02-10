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

// export async function RoomUpdate(id : string, room : Room) {
//   try {
//     const existingRoom = await prisma.room.findUnique({
//       where : {roomNumber : id},
//     });

//     if (!existingRoom) {
//       throw new Error(`${id} Room Number not found`);
//     }

//     const roomUpdate = await prisma.room.update({
//       where: {roomNumber : id},
//       data : {
//         roomType : room.roomType,
//         selectedImage : room.selectedImage,
//         hallFloor : room.hallFloor,
//         price : room.price,
//         status : room.status
//       }
//     });
//     console.log("Success Full Update Room", roomUpdate);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// export async function RoomDelete(id : string) {
//   try {
//     const existingRoom = await prisma.room.findUnique({
//       where : {roomNumber : id}
//     });

//     if (!existingRoom) {
//       throw new Error(`${id} Room Number not found`);
//     }

//     await prisma.room.delete({
//       where : {roomNumber : id}
//     });
    
//     console.log("Success Fully Deleted Room", id);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// export async function getAll(){
//   try {
//     const getAll = await prisma.room.findMany();
//     console.log(getAll);
//     return getAll;
//   } catch (error) {
//     console.log("Error", error);
//   }
// }