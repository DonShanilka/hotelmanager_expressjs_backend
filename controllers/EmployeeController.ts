import express from 'express';
import { EmployeeAdd, EmployeeDelete, EmployeeUpdate, getAllEmployee } from '../services/EmployeeService';
import { Employee } from '../model/Employee';


const router = express.Router();

exports.saveEmployee = async (req : any, res : any) => {
  const emp = req.body;
  console.log("Received Employee: ", emp);

  try {
    const addEmp = await EmployeeAdd(emp);
    res.status(200).json(addEmp);
  } catch (error) {
    console.error("Error Adding Employee: ", error);
    res.status(400).send("Error Adding Employee")
  }
};

exports.updateEmployee = async (req : any, res : any) => {
  const id = req.params.id;
  console.log("Employee Id for Update: ", id);
  const employee : Employee = req.body;

  try {
    await EmployeeUpdate(id, employee);
    res.send("Employee Update")
  } catch (error) {
    console.log("Error Update Employee: ", error);
  }
};

exports.deleteEmployee = async (req : any, res : any) => {
  const id = req.params.id;

  try {
    await EmployeeDelete(id);
    res.send("Employee Deleted");
  } catch (error) {
    console.log("Error Delete Employee", error);
  }
};


exports.getAllEmployee = async (req : any, res : any) => {
  try {
    const guest = await getAllEmployee();
    console.log(res.json(guest));
  } catch (error) {
    console.log("error Getting Employee", error);
  }
};

export default router;