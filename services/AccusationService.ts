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