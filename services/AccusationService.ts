import { prisma } from "../db/Prisma_data_storage";
import { Accusation } from "../model/Accusation";

export async function AccusationAdd(accusation : Accusation) {
  try {
    const newAccusation = await prisma.accusation.create({
      data: {
        accusationId : accusation.accusationId,
        reportType : accusation.reportType,
        guestId : accusation.guestId,
        description : accusation.description
      }
    })
    console.log("Accusation Added: ", newAccusation)
  } catch (error) {
    console.log("Error Adding Accusation", error);
  }
}

export async function AccusationUpdate (id: number, accusation : Accusation) {
  try {
    const accusationUpdate = await prisma.accusation.update({
      where : {accusationId : id},
      data : {
        reportType : accusation.reportType,
        guestId : accusation.guestId,
        description : accusation.guestId
      }
    })
    console.log("Accusation Added: ", accusationUpdate);
  } catch (error) {
    console.log("Error Updatin Accusation: ", error);
  }
}

export async function AccusationDelete(id:number) {
  try {
    await prisma.accusation.delete({
      where : {accusationId : id}
    })
    console.log("Deleted Accusation: ", id);
  } catch (error) {
    console.log("Error Delete Accusation: ", error);
  }
}

export async function getAllAccusation() {
  try {
    return await prisma.accusation.findMany();
  } catch(error) {
    console.log("Error Geting Accusation", error);
  }
}