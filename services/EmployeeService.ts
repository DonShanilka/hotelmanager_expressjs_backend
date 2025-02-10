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
};

export async function EmployeeUpdate(id: string, employee: Employee) {
  try {
    const existingEmployee = await prisma.employee.findUnique({
      where: {employeeID: id },
    });

    if (!existingEmployee) {
      throw new Error(`Employee with ID ${id} not found`);
    }

    const employeeUpdate = await prisma.employee.update({
      where: {employeeID : id},
      data : {
        fullName : employee.fullName,
        email : employee.email,
        phoneNumber : employee.phoneNumber,
        role : employee.role,
        salary : employee.salary,
        hireDate : employee.hireDate,
        createdAt : employee.createdAt
      }
    })
    console.log("Success Fully Updated Employee: ", employeeUpdate);
  } catch (error) {
    console.log("Error", error);
  }
};

export async function EmployeeDelete(id : string) {
  try {
    const existingEmployee = await prisma.employee.findUnique({
      where: {employeeID: id },
    });

    if (!existingEmployee) {
      throw new Error(`Employee with ID ${id} not found`);
    }

    await prisma.employee.delete({
      where: {employeeID : id}
    });
    console.log("Success Fully Deleted Employee: ");
  } catch (error) {
    console.log("Error", error);
  }
};

export async function getAllEmployee() {
  try {
    const allEmployee = await prisma.employee.findMany();
    console.log("All Employee: ", allEmployee);
    return allEmployee;
  } catch (error) {
    console.log("Error", error);
  }
}