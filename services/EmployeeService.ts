import { prisma } from "../db/Prisma_data_storage";
import { Employee } from "../model/Employee";


export async function BookingAdd(employee: Employee) {
  try {
    const newEmployee = await prisma.employee.create({
      data: {
        employeeID : employee.employeeID,
        fullName : employee.fullName,
        email : employee.email,
        phoneNumber : employee.phoneNumber,
        role : employee.role,
        salary : employee.salary,
        hireDate : employee.hireDate,
        createdAt : employee.createdAt
      }
    });
    console.log("Adding Success Employee", newEmployee)
    return newEmployee;
  } catch (error) {
    console.error('Error adding Employee:', error);
    throw error;
  }
}